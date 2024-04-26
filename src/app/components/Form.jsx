"use client";
import React, { useState } from "react";

export const Form = () => {
  const [message, setMessage] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const response = await fetch(event.target.action, {
      method: "POST",
      body: data,
      headers: {
        accept: "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      setMessage(result.errors.map((error) => error.message).join(","));
      return false;
    }
    setMessage("success");
  };
  return (
    <form
      id="my-form"
      action="https://formspree.io/f/xjvqpzrl"
      method="POST"
      onSubmit={handleSubmit}
      className="text-2xl flex flex-col mt-[120px] gap-5 justify-center items-center text-white"
    >
      <input
        className="z-20 w-3/6 h-10 rounded-xl text-center justify-center bg-purple-600 bg-opacity-20 hover:bg-pink-500 hover:bg-opacity-20 border"
        placeholder="Name"
        type="text"
        name="names"
        id="names"
      />
      <input
        className="z-20 w-3/6 h-10 rounded-xl text-center justify-center bg-purple-500 bg-opacity-20 hover:bg-pink-500 hover:bg-opacity-20"
        placeholder="Email"
        type="email"
        name="email"
        id="email"
      />
      <textarea
        className="z-20 w-3/6 h-60 rounded-xl text-center justify-center bg-purple-500 bg-opacity-20 hover:bg-pink-500 hover:bg-opacity-20 resize-none"
        placeholder="Message"
        name="message"
        id="message"
      ></textarea>
      <button className="flex rounded-xl text-center items-center justify-center bg-purple-500 bg-opacity-30 p-4 z-50 font-bold text-white">
        Submit
      </button>
      <p className="text-white bg-green-500 rounded-xl p-2">{message}</p>
    </form>
  );
};
