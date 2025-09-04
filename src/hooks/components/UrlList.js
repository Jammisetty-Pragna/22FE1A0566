import React from "react";

const UrlList = ({ urls }) => {
  return (
    <div className="url-list">
      <h2>📋 Shortened Links</h2>
      {urls.length === 0 ? (
        <p>No links added yet.</p>
      ) : (
        <ul>
          {urls.map((url) => (
            <li key={url.id}>
              <p>
                <strong>Original:</strong>{" "}
                <a href={url.originalUrl} target="_blank" rel="noreferrer">
                  {url.originalUrl}
                </a>
              </p>
              <p>
                <strong>Short:</strong>{" "}
                <a href={url.originalUrl} target="_blank" rel="noreferrer">
                  {url.shortUrl}
                </a>
              </p>
              <p>
                <strong>Expiry:</strong> {url.expiry || "No expiry"}
              </p>
              <p>
                <strong>Keyword:</strong> {url.keyword}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UrlList;
