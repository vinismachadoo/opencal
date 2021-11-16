const { Client } = require("@notionhq/client");
require("dotenv").config();

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const notionPropsById = (props) => {
  return Object.values(props).reduce((obj, prop) => {
    const { id, ...others } = prop;
    return { ...obj, [id]: others };
  }, {});
};

export const getTags = async () => {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return notionPropsById(database.properties)[
    process.env.OPENCAL_TAGS_ID
  ].multi_select.options.map((option) => {
    return { id: option.id, name: option.name };
  });
};

export const fromNotionObject = (notionPage) => {
  const propertiesById = notionPropsById(notionPage.properties);

  const objectDescription =
    (propertiesById[process.env.OPENCAL_DESCRIPTION_ID].rich_text[0] &&
      propertiesById[process.env.OPENCAL_DESCRIPTION_ID].rich_text[0].text
        .content) ||
    "";
  const objectLocal =
    (propertiesById[process.env.OPENCAL_LOCAL_ID].rich_text[0] &&
      propertiesById[process.env.OPENCAL_LOCAL_ID].rich_text[0].text.content) ||
    "Não divulgado";
  const objectAddress =
    (propertiesById[process.env.OPENCAL_ADDRESS_ID].rich_text[0] &&
      propertiesById[process.env.OPENCAL_ADDRESS_ID].rich_text[0].text
        .content) ||
    "";

  const objectBookmarks =
    propertiesById[process.env.OPENCAL_BOOKMARKS_ID].number || 0;

  const objectUpVotes =
    propertiesById[process.env.OPENCAL_UPVOTES_ID].number || 0;

  const objectDownVotes =
    propertiesById[process.env.OPENCAL_DOWNVOTES_ID].number || 0;

  return {
    id: notionPage.id,
    lastUpdateTime: notionPage.last_edited_time,
    name: propertiesById[process.env.OPENCAL_NAME_ID].title[0].text.content,
    description: objectDescription,
    price: propertiesById[process.env.OPENCAL_PRICE_ID].number,
    upVotes: objectUpVotes,
    downVotes: objectDownVotes,
    bookmarks: objectBookmarks,
    coverLink: propertiesById[process.env.OPENCAL_COVERURL_ID].url,
    externalLink: propertiesById[process.env.OPENCAL_EXTERNALURL_ID].url,
    address: objectAddress,
    local: objectLocal,
    startDate: propertiesById[process.env.OPENCAL_DATE_ID].date.start,
    endDate: propertiesById[process.env.OPENCAL_DATE_ID].date.end,
    tags: propertiesById[process.env.OPENCAL_TAGS_ID].multi_select.map(
      (tag) => tag.name
    ),
  };
};

export const getEvents = async () => {
  const notionPages = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return notionPages.results.map(fromNotionObject);
};

export const getEvent = async (pageId) => {
  return fromNotionObject(await notion.pages.retrieve({ page_id: pageId }));
};

export const createEvent = ({
  name,
  description,
  coverLink,
  externalLink,
  address,
  local,
  startDate,
  endDate,
  tags,
}) => {
  notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID,
    },
    properties: {
      [process.env.OPENCAL_NAME_ID]: {
        title: [
          {
            type: "text",
            text: {
              content: name,
            },
          },
        ],
      },
      [process.env.OPENCAL_DESCRIPTION_ID]: {
        rich_text: [
          {
            type: "text",
            text: {
              content: description,
            },
          },
        ],
      },
      [process.env.OPENCAL_PRICE_ID]: {
        number: 0,
      },
      [process.env.OPENCAL_UPVOTES_ID]: {
        number: 0,
      },
      [process.env.OPENCAL_DOWNVOTES_ID]: {
        number: 0,
      },
      [process.env.OPENCAL_COVERURL_ID]: {
        url: coverLink,
      },
      [process.env.OPENCAL_EXTERNALURL_ID]: {
        url: externalLink,
      },
      [process.env.OPENCAL_ADDRESS_ID]: {
        rich_text: [
          {
            type: "text",
            text: {
              content: address,
            },
          },
        ],
      },
      [process.env.OPENCAL_LOCAL_ID]: {
        rich_text: [
          {
            type: "text",
            text: {
              content: local,
            },
          },
        ],
      },
      [process.env.OPENCAL_DATE_ID]: {
        date: {
          start: startDate,
          end: endDate,
        },
      },
      [process.env.OPENCAL_TAGS_ID]: {
        multi_select: tags.map((tag) => {
          return { id: tag.id };
        }),
      },
    },
  });
};

export const upVoteEvent = async (pageId) => {
  const event = await getEvent(pageId);
  const votes = event.votes + 1;
  await notion.pages.update({
    page_id: pageId,
    properties: {
      [process.env.NOTION_UPVOTES_ID]: { number: votes },
    },
  });
};

export const downVoteEvent = async (pageId) => {
  const event = await getEvent(pageId);
  const votes = event.votes + 1;
  await notion.pages.update({
    page_id: pageId,
    properties: {
      [process.env.NOTION_DOWNVOTES_ID]: { number: votes },
    },
  });

  return votes;
};
