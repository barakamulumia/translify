import React, { useState, useEffect } from "react";
import { UserAPI } from "../../Api";
import { Navbar } from "../../Components";

export default function Client() {
  const [content, setContent] = useState(undefined);

  useEffect(() => {
    UserAPI.getAdminBoard().then(
      (response) => {
        setContent(response.data.content);
      },
      (error) => {
        setContent(
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
            error.message ||
            error.toString()
        );
      }
    );
  }, []);
  return (
    <div>
      <Navbar />
      {content && <h1>{content}</h1>}
    </div>
  );
}
