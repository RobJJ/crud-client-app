import React from "react";
import { NavLink } from "react-router-dom";
//
function ClientNav(params) {
  return (
    <div className="flex w-full bg-orange-200 text-center p-2">
      <NavLink
        to=""
        end
        className={({ isActive }) =>
          ["w-1/3 underline", isActive ? "bg-slate-400 text-white" : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Info
      </NavLink>
      <NavLink
        to="receipts"
        className={({ isActive }) =>
          ["w-1/3 underline", isActive ? "bg-slate-400 text-white" : null]
            .filter(Boolean)
            .join(" ")
        }
      >
        Receipts
      </NavLink>
      <NavLink
        to="transaction"
        className={({ isActive }) =>
          ["w-1/3 underline", isActive ? "bg-slate-400 text-white" : null]
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
