export default function Avatar({ size }: { size: number }) {
  return (
    <div
      className="rounded-full shadow-md overflow-hidden mx-auto"
      style={{
        height: size,
        width: size,
      }}
    >
      <img
        alt="mersocarlin"
        height={size}
        src="/hemerson-dark.jpg"
        width={size}
      />
    </div>
  )
}
