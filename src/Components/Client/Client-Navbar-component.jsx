import React from "react";
import { NavLink } from "react-router-dom";
//
function ClientNav(params) {
  return (
    <div className="flex w-full bg-blue-800 text-center text-lg p-2 border-y-4 border-white">
      <NavLink
        to=""
        end
        className={({ isActive }) =>
          [
            "w-1/3 underline text-white",
            isActive ? "bg-slate-400 rounded-xl" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        Info
      </NavLink>
      <NavLink
        to="receipts"
        className={({ isActive }) =>
          [
            "w-1/3 underline text-white",
            isActive ? "bg-slate-400 rounded-xl" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        Receipts
      </NavLink>
      <NavLink
        to="transaction"
        className={({ isActive }) =>
          [
            "w-1/3 underline text-white",
            isActive ? "bg-slate-400 rounded-xl" : null,
          ]
            .filter(Boolean)
            .join(" ")
        }
      >
        Transaction
      </NavLink>
    </div>
  );
}

export default ClientNav;
