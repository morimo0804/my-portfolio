export const metadata = {
  title: "WORKS",
};

type Props = {
  children: React.ReactNode;
};

export const revalidate = 60;

export default function WorksLayout({ children }: Props) {
  return <>{children}</>;
}
