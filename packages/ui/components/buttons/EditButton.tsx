import SmallLinkButton from 'ui/components/buttons/SmallLinkButton';
type EditButtonProps = {
  editUrl: string;
  classes?: string;
};

const EditButton = ({ editUrl, classes }: EditButtonProps): JSX.Element => {
  return <SmallLinkButton text={'Suggets an edit'} href={editUrl} icon={'edit'} className={classes} />;
};

export default EditButton;
