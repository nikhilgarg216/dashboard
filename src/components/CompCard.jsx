import React from "react";
import SingleCard from "./SingleCard";

const cardData = [
  {
    title: "Total Orders",
    count: 75,
    change: "3%",
    icon: "bi-caret-up-fill",
    color: "text-success",
    logo: "bi-basket fs-2",
  },
  {
    title: "Total Delivered",
    count: 120,
    change: "5%",
    icon: "bi-caret-up-fill",
    color: "text-success",
    logo: "bi-bag-check fs-2",
  },
  {
    title: "Total Cancelled",
    count: "$1500",
    change: "-2%",
    icon: "bi-caret-down-fill",
    color: "text-danger",
    logo: "bi-bag-x fs-2",
  },
  {
    title: "Total Revenue",
    count: 30,
    change: "1%",
    icon: "bi-caret-up-fill",
    color: "text-success",
    logo: "bi-currency-exchange fs-2",
  },
];

export default function BasicCard() {
  return (
    <div className="container-fluid">
      <div className=" d-flex row g-2">
        <div className="col-lg-8 col-md-12 ">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
            {cardData.map((data, index) => (
              <div className="col" key={index}>
                <div className="card text-white h-100" style={{background:"#1F2029"}}>
                  <div className="card-body">
                    <i className={`bi ${data.logo}`}></i>
                    <p className="card-title mb-0">{data.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">{data.count}</h4>
                      <small className={data.color}>
                        <i className={`bi ${data.icon}`}></i> {data.change}
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-4 col-md-12">
          <SingleCard />
        </div>
      </div>
    </div>
  );
}
