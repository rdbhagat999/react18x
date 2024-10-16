export default function LoadingComponent({ text = "app" }: { text: string }) {
  return (
    <div className="flex justify-center items-center">
      <h1 className="text-2xl font-medium">Loading {text}...</h1>
    </div>
  );
}
