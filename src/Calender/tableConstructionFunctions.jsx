import React from "react";
export const dayGenerator = (newClasses, i) => {
  return (
    <td className={newClasses} key={i}>
      {i}
    </td>
  );
};
