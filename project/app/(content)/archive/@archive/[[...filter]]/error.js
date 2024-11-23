"use client";

export default function NewsFilterErrorPage({ error }) {
  return (
    <>
      <h1>News filter error</h1>
      <p>{error.message}</p>
    </>
  );
}
