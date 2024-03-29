import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Servises = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(" http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mt-12 mb-20">
      <div className="text-center">
        <h3 className="text-3xl text-orange-600">Our Servises</h3>
        <h3 className="text-6xl font-semibold   ">Our Servises Area</h3>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Servises;
