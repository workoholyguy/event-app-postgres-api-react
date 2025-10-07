import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./GiftDetails.css";

const GiftDetails = () => {
  const { id } = useParams();

  const [gift, setGift] = useState({
    id: 0,
    name: "",
    pricepoint: "",
    audience: "",
    image: "",
    description: "",
    submittedby: "",
    submittedon: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGiftById = async () => {
      try {
        const response = await fetch(`/gifts/${id}`);
        if (!response.ok) {
          throw new Error(`Unable to load gift ${id}`);
        }

        const giftData = await response.json();
        setGift(giftData);
        setError("");
      } catch (fetchError) {
        console.error("Failed to load gift:", fetchError);
        setError("We couldn't load this gift right now.");
      }
    };

    fetchGiftById();
  }, [id]);

  return (
    <div className="GiftDetails">
      <main id="gift-content" className="gift-info">
        <div className="image-container">
          <img id="image" src={gift.image} alt={gift.name} />
        </div>
        <div className="gift-details">
          {error ? (
            <p className="error-message">{error}</p>
          ) : (
            <>
              <h2 id="name">{gift.name}</h2>
              <p id="submittedBy">{"Submitted By: " + gift.submittedby}</p>
              <p id="pricePoint">{"Price: " + gift.pricepoint}</p>
              <p id="audience">{"Great For: " + gift.audience}</p>
              <p id="description">{gift.description}</p>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default GiftDetails;
