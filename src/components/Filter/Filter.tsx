export const Filter = ({
  onChange,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <form className="mb-[10px]">
      <input
        className="fieldStyles"
        name="filter"
        placeholder="Find participants by name or email"
        type="text"
        onChange={onChange}
      />
    </form>
  );
};
