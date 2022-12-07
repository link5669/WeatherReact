/**
 * Simple React component to display an image within in a circle
 * @param url: string (image URL)
 * @param width: number
 * @param height: number
 */
export const Logo = ({ url, width, height }) => {
  return (
    <img
      style={{
        borderRadius: "50%",
      }}
      src={url ?? "https://avatars.githubusercontent.com/u/60403571?s=280&v=4"}
      width={width ?? 150}
      height={height ?? 150}
    />
  );
};
