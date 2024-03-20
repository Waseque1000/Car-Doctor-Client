import React from "react";

const BookingRow = ({ booking }) => {
  const { customerName, email, date, price, img, servise_title } = booking;
  return (
    <tr className="mb-20">
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{customerName}</div>
          </div>
        </div>
      </td>
      <td>
        {servise_title}
        <br />
        <span className="badge badge-ghost badge-sm">
          <div className="text-sm opacity-50">{date}</div>
        </span>
      </td>
      <td>{price}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default BookingRow;
