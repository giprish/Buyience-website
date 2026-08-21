import Image from "next/image";

type Props = {
  name: string;
  initials: string;
  image?: string;
  bio?: string;
};

export default function BlogAuthor({
  name,
  initials,
  image,
  bio = "Writing on B2B commerce, AI quoting, and the systems that make wholesale sales actually move.",
}: Props) {
  return (
    <aside className="blog-author" aria-label={`About ${name}`}>
      <span className="blog-author-av" aria-hidden="true">
        {image ? (
          <Image src={image} alt="" width={64} height={64} className="blog-author-av-img" />
        ) : (
          initials
        )}
      </span>
      <div>
        <p className="blog-author-label">Written by</p>
        <p className="blog-author-name">{name}</p>
        <p className="blog-author-bio">{bio}</p>
      </div>
    </aside>
  );
}
