import Image from "next/image";

type Props = {
  authorName: string;
  authorInitials: string;
  authorImage?: string;
  dateLabel?: string;
  dateIso?: string;
  readingTime?: string;
  size?: "sm" | "md";
};

export default function BlogMeta({
  authorName,
  authorInitials,
  authorImage,
  dateLabel,
  dateIso,
  readingTime,
  size = "sm",
}: Props) {
  return (
    <div className={`blog-meta blog-meta--${size}`}>
      <span className="blog-meta-av" aria-hidden="true">
        {authorImage ? (
          <Image src={authorImage} alt="" width={40} height={40} className="blog-meta-av-img" />
        ) : (
          authorInitials
        )}
      </span>
      <span className="blog-meta-author">{authorName}</span>
      {dateLabel ? (
        <>
          <span className="blog-meta-sep" aria-hidden="true">
            ·
          </span>
          <time dateTime={dateIso ?? dateLabel}>{dateLabel}</time>
        </>
      ) : null}
      {readingTime ? (
        <>
          <span className="blog-meta-sep" aria-hidden="true">
            ·
          </span>
          <span>{readingTime}</span>
        </>
      ) : null}
    </div>
  );
}
