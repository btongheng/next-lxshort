const movieSeries = [
  {
    id: 1,
    name: "ទ្រុងស្នេហ៍ឃុំចិត្ត",
    category: "រឿងស្នេហា",
    thumbnail:
      "https://i3.wp.com/lxshort.com/wp-content/uploads/2026/04/%E1%9E%91%E1%9F%92%E1%9E%9A%E1%9E%BB%E1%9E%84%E1%9E%9F%E1%9F%92%E1%9E%93%E1%9F%81%E1%9E%A0%E1%9F%8D%E1%9E%83%E1%9E%BB%E1%9F%86%E1%9E%85%E1%9E%B7%E1%9E%8F%E1%9F%92%E1%9E%8F.jpg",
    stream:
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: 2,
    name: "អ្នកលេងក្រៅច្បាប់",
    category: "រឿងវាយគ្នា",
    thumbnail:
      "https://i2.wp.com/lxshort.com/wp-content/uploads/2026/03/%E1%9E%A2%E1%9F%92%E1%9E%93%E1%9E%80%E1%9E%9B%E1%9F%81%E1%9E%84%E1%9E%80%E1%9F%92%E1%9E%9A%E1%9F%85%E1%9E%85%E1%9F%92%E1%9E%94%E1%9E%B6%E1%9E%94%E1%9F%8B.jpg",
    stream:
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: 3,
    name: "សត្វទេពចាប់កំណើត",
    category: "រឿងបុរាណ",
    thumbnail:
      "https://i3.wp.com/lxshort.com/wp-content/uploads/2026/02/16.jpg",
    stream:
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: 4,
    name: "ទ្រុងស្នេហ៍ឃុំចិត្ត",
    category: "រឿងស្នេហា",
    thumbnail:
      "https://i3.wp.com/lxshort.com/wp-content/uploads/2026/04/%E1%9E%91%E1%9F%92%E1%9E%9A%E1%9E%BB%E1%9E%84%E1%9E%9F%E1%9F%92%E1%9E%93%E1%9F%81%E1%9E%A0%E1%9F%8D%E1%9E%83%E1%9E%BB%E1%9F%86%E1%9E%85%E1%9E%B7%E1%9E%8F%E1%9F%92%E1%9E%8F.jpg",
    stream:
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: 5,
    name: "អ្នកលេងក្រៅច្បាប់",
    category: "រឿងវាយគ្នា",
    thumbnail:
      "https://i2.wp.com/lxshort.com/wp-content/uploads/2026/03/%E1%9E%A2%E1%9F%92%E1%9E%93%E1%9E%80%E1%9E%9B%E1%9F%81%E1%9E%84%E1%9E%80%E1%9F%92%E1%9E%9A%E1%9F%85%E1%9E%85%E1%9F%92%E1%9E%94%E1%9E%B6%E1%9E%94%E1%9F%8B.jpg",
    stream:
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: 6,
    name: "សត្វទេពចាប់កំណើត",
    category: "រឿងបុរាណ",
    thumbnail:
      "https://i3.wp.com/lxshort.com/wp-content/uploads/2026/02/16.jpg",
    stream:
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: 7,
    name: "ទ្រុងស្នេហ៍ឃុំចិត្ត",
    category: "រឿងស្នេហា",
    thumbnail:
      "https://i3.wp.com/lxshort.com/wp-content/uploads/2026/04/%E1%9E%91%E1%9F%92%E1%9E%9A%E1%9E%BB%E1%9E%84%E1%9E%9F%E1%9F%92%E1%9E%93%E1%9F%81%E1%9E%A0%E1%9F%8D%E1%9E%83%E1%9E%BB%E1%9F%86%E1%9E%85%E1%9E%B7%E1%9E%8F%E1%9F%92%E1%9E%8F.jpg",
    stream:
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: 8,
    name: "អ្នកលេងក្រៅច្បាប់",
    category: "រឿងវាយគ្នា",
    thumbnail:
      "https://i2.wp.com/lxshort.com/wp-content/uploads/2026/03/%E1%9E%A2%E1%9F%92%E1%9E%93%E1%9E%80%E1%9E%9B%E1%9F%81%E1%9E%84%E1%9E%80%E1%9F%92%E1%9E%9A%E1%9F%85%E1%9E%85%E1%9F%92%E1%9E%94%E1%9E%B6%E1%9E%94%E1%9F%8B.jpg",
    stream:
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
  {
    id: 9,
    name: "សត្វទេពចាប់កំណើត",
    category: "រឿងបុរាណ",
    thumbnail:
      "https://i3.wp.com/lxshort.com/wp-content/uploads/2026/02/16.jpg",
    stream:
      "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
  },
];

export default movieSeries;