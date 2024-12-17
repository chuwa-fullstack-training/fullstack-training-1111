module.exports = {
  getMockData: async (req, res) => {
    const { query1, query2 } = req.query;
    if (!query1 || !query2) {
      return res.status(400).json({ error: "Query1 and Query2 are required" });
    }

    try {
      const url1 = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(
        query1
      )}&tags=story`;

      const url2 = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(
        query2
      )}&tags=story`;

      const [response1, response2] = await Promise.all([
        fetch(url1),
        fetch(url2),
      ]);

      // Extract JSON content
      const data1 = await response1.json();
      const data2 = await response2.json();

      // Process and send back the relevant hits
      res.json({
        query1: data1.hits.map((item) => ({
          title: item.title,
          url: item.url,
        })),
        query2: data2.hits.map((item) => ({
          title: item.title,
          url: item.url,
        })),
      });
    } catch (error) {
      console.error("Error fetching data:", error.message);
      res.status(500).json({ error: "Failed to fetch stories" });
    }
  },
};
