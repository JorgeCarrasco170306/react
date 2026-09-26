interface Props {
  title: string;
  subTitle?: string;
}

export const HeaderComponent = ({ title, subTitle }: Props) => {
  return (
    <div className="content-center">
      <h1>{title}</h1>
      {subTitle && <p>{subTitle}</p>}
    </div>
  );
};
