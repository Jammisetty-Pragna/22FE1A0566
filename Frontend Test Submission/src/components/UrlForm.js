import React, { useState } from "react";

const UrlForm = ({ onAddUrl }) => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [expiry, setExpiry] = useState("");
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!originalUrl) return alert("Please enter a URL!");

    onAddUrl(originalUrl, expiry, keyword);
    setOriginalUrl("");
    setExpiry("");
    setKeyword("");
  };

  return (
    <form className="url-form" onSubmit={handleSubmit}>
      <input
        type="url"
        placeholder="Enter original URL"
        value={originalUrl}
        onChange={(e) => setOriginalUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Expiry (e.g. 2 days)"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />
      <input
        type="text"
        placeholder="Custom keyword (optional)"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit">Shorten</button>
    </form>
  );
};

export default UrlForm;
