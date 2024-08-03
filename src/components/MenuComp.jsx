import React from "react";

const MenuList = () => {
  const menuItems = [
    { icon: "🎯", label: "Goals", color: "#8B4513" },
    { icon: "🍔", label: "Popular Dishes", color: "#4169E1" },
    { icon: "🍽️", label: "Menus", color: "#008080" },
  ];

  return (
    <div
      style={{
        backgroundColor: "#1F2029",
        padding: "35px",
        borderRadius: "10px",
      }}
    >
      {menuItems.map((item, index) => (
        <div key={index} className="d-flex align-items-center mb-4">
          <div style={{
              backgroundColor: item.color,
              borderRadius: "50%",
              width: "60px",
              height: "60px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "15px",
            }}
          >
            {item.icon}
          </div>
          <span className="flex-grow-1 fs-4">{item.label}</span>
          <span style={{ color: "#A9A9A9" }}>
            <i class="bi bi-chevron-right"></i>
          </span>
        </div>
      ))}
    </div>
  );
};

export default MenuList;
