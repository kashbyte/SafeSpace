"use client";

type BannerProps = {
  imageSrc: string;
  altText?: string;
};

export default function Banner({ imageSrc, altText = "Banner" }: BannerProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto 30px"
      }}
    >
      <img
        src={imageSrc}
        alt={altText}
        style={{
          width: "100%",
          height: "260px",
          objectFit: "cover",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.12)"
        }}
      />
    </div>
  );
}
