"use client";

import { useMemo, useState, CSSProperties } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Opulent Grand Ballroom",
    category: "Wedding",
    image: "/data3.jpeg",
  },
  {
    id: 2,
    title: "Elegant Wedding Haven",
    category: "Wedding",
    image: "/data2.jpeg",
  },
  {
    id: 3,
    title: "Floral Wedding Symphony",
    category: "Wedding",
    image: "/data1.jpeg",
  },
  {
    id: 4,
    title: "Vibrant Birthday Extravaganza",
    category: "Birthday",
    image: "/HERO5.jpeg",
  },
  {
    id: 5,
    title: "Traditional Saree Soirée",
    category: "Cultural",
    image: "/data6.jpeg",
  },
  {
    id: 6,
    title: "Chic Reception Lounge",
    category: "Reception",
    image: "/data7.jpeg",
  },
  {
    id: 7,
    title: "Joyful Birthday Celebration",
    category: "Birthday",
    image: "/data4.jpeg",
  },
  {
    id: 8,
    title: "Fun-Filled Party Moments",
    category: "Birthday",
    image: "/data8.jpeg",
  },
  {
    id: 9,
    title: "Energetic College Fest",
    category: "Corporate",
    image: "/data5.jpeg",
  },

  // New HERO images
  {
    id: 10,
    title: "Grand Entrance Showcase",
    category: "Wedding",
    image: "/HERO1.PNG",
  },
  {
    id: 11,
    title: "Majestic Stage Ambience",
    category: "Reception",
    image: "/HERO2.jpeg",
  },
  {
    id: 12,
    title: "Luxe Celebration Setup",
    category: "Birthday",
    image: "/HERO3.jpeg",
  },
  {
    id: 13,
    title: "Signature Event Highlight",
    category: "Corporate",
    image: "/HERO4.jpeg",
  },
];
  const categories: string[] = [
    "All",
    "Wedding",
    "Reception",
    "Corporate",
    "Birthday",
  ];

  const filteredData = useMemo(() => {
    if (activeFilter === "All") return galleryData;
    return galleryData.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section style={styles.section}>
      {/* Heading */}
      <div style={styles.headingWrap}>
        <p style={styles.subTitle}>SLV PREMIUM COLLECTION</p>

        <h2 style={styles.heading}>
          Our Luxury <span style={styles.gold}>Gallery</span>
        </h2>

        <p style={styles.desc}>
          Explore premium wedding setups, elegant interiors, unforgettable
          celebrations and world-class event experiences crafted with perfection.
        </p>
      </div>

      {/* Filters */}
      <div style={styles.filterWrap}>
        {categories.map((item) => (
          <button
            key={item}
            onClick={() => setActiveFilter(item)}
            style={{
              ...styles.filterBtn,
              ...(activeFilter === item ? styles.activeBtn : {}),
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={styles.grid}>
        {filteredData.map((item) => (
          <div key={item.id} style={styles.card}>
            <img src={item.image} alt={item.title} style={styles.image} />

            <div style={styles.overlay}>
              <p style={styles.category}>{item.category}</p>
              <h3 style={styles.cardTitle}>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}

    </section>
  );
}

const styles: { [key: string]: CSSProperties } = {
  section: {
    backgroundColor: "#050505",
    padding: "100px 7%",
    color: "#fff",
    minHeight: "100vh",
  },

  headingWrap: {
    textAlign: "center",
    marginBottom: "50px",
  },

  subTitle: {
    color: "#d4af37",
    letterSpacing: "4px",
    fontSize: "13px",
    marginBottom: "12px",
  },

  heading: {
    fontSize: "58px",
    fontWeight: 700,
    marginBottom: "18px",
    lineHeight: 1.2,
  },

  gold: {
    color: "#d4af37",
  },

  desc: {
    maxWidth: "850px",
    margin: "auto",
    color: "#d0d0d0",
    fontSize: "18px",
    lineHeight: "32px",
  },

  filterWrap: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "55px",
  },

  filterBtn: {
    padding: "12px 28px",
    borderRadius: "40px",
    border: "1px solid #444",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    transition: "0.4s",
    fontSize: "15px",
  },

  activeBtn: {
    background: "linear-gradient(135deg,#d4af37,#8f6b15)",
    color: "#000",
    border: "none",
    fontWeight: 700,
    boxShadow: "0 0 18px rgba(212,175,55,0.35)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "28px",
  },

  card: {
    position: "relative",
    height: "420px",
    overflow: "hidden",
    borderRadius: "24px",
    cursor: "pointer",
    boxShadow: "0 15px 35px rgba(0,0,0,0.45)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "0.7s ease",
  },

  overlay: {
    position: "absolute",
    inset: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "28px",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.15), transparent)",
  },

  category: {
    color: "#d4af37",
    fontSize: "13px",
    letterSpacing: "3px",
    marginBottom: "8px",
  },

  cardTitle: {
    fontSize: "28px",
    margin: 0,
  },

  bottom: {
    textAlign: "center",
    marginTop: "60px",
  },

  ctaBtn: {
    background: "linear-gradient(135deg,#d4af37,#8f6b15)",
    border: "none",
    color: "#000",
    padding: "16px 40px",
    borderRadius: "40px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: 700,
    letterSpacing: "1px",
  },
};