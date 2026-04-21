"use client";

import { useMemo, useState, CSSProperties } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
}

export default function Gallery(): JSX.Element {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const galleryData: GalleryItem[] = [
    {
      id: 1,
      title: "Royal Wedding Setup",
      category: "Wedding",
      image: "/gallery/g1.avif",
    },
    {
      id: 2,
      title: "Luxury Reception Hall",
      category: "Reception",
      image: "/gallery/g2.webp",
    },
    {
      id: 3,
      title: "Corporate Event Space",
      category: "Corporate",
      image: "/gallery/g3.avif",
    },
    {
      id: 4,
      title: "Birthday Celebration",
      category: "Birthday",
      image: "/gallery/g4.avif",
    },
    {
      id: 5,
      title: "Traditional Decor",
      category: "Wedding",
      image: "/gallery/g8.avif",
    },
    {
      id: 6,
      title: "Luxury Stage Design",
      category: "Reception",
      image: "/gallery/g6.avif",
    },
    {
      id: 7,
      title: "Premium Dining Hall",
      category: "Corporate",
      image: "/gallery/g7.jpg",
    },
    {
      id: 8,
      title: "Elegant Floral Theme",
      category: "Wedding",
      image: "/gallery/g5.webp",
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
      <div style={styles.bottom}>
        <button style={styles.ctaBtn}>BOOK YOUR EVENT</button>
      </div>
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