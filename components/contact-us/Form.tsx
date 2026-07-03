"use client";

import Button from "../UI/Button";

export default function Form() {
  return (
    <>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={""}
          onChange={() => {}}
          className="border-b! border-b-neutral-300! w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={""}
          onChange={() => {}}
          className="border-b! border-b-neutral-300! w-full"
        />
        <select
          defaultValue="s"
          className="select border-b! border-b-neutral-300! w-full p-2 text-neutral-400"
          onChange={() => {}}
        >
          <option value="s">Subject</option>
          <option>x</option>
          <option>y</option>
        </select>
        <input
          type="text"
          placeholder="Order Number"
          value={""}
          onChange={() => {}}
          className="border-b! border-b-neutral-300! w-full"
        />
        <input
          type="text"
          placeholder="Message"
          value={""}
          onChange={() => {}}
          className="border-b! border-b-neutral-300! w-full"
        />
        <div className="flex items-baseline lg:items-center gap-x-2">
          <input
            type="checkbox"
            name=""
            id="checkbox"
            className="max-h-max"
            onChange={() => {}}
          />
          <span>
            I have read and understood the contact us privacy and policy.
          </span>
        </div>
        <Button variant="primary" className="w-full lg:w-80 py-2 lg:ml-auto">
          Send
        </Button>
      </div>
    </>
  );
}
