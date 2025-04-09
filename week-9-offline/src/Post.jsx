const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 30,
};

export function PostComponent({
  name,
  subtitle,
  time,
  profilePhoto,
  description,
}) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={profilePhoto}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        />
        <div style={{ fontSize: 14, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && (
            <div style={{ display: "flex" }}>
              <div>{time} &#8226;</div>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5PpNh5nNkcB83Sfwp-V3NbdJ6bku2T6Kk_g&s"
                }
                style={{ width: 12, height: 12, marginLeft: 2 }}
              />
            </div>
          )}
        </div>
      </div>

      <div style={{ fontSize: 16 }}>{description}</div>
    </div>
  );
}
