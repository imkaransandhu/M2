const InputForm = ({
  handleCarFilterType,
  handleLoader,
  handleSubmit,
  handleURL,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex px-10 py-4 justify-center">
      <input
        required="required"
        onChange={handleURL}
        type="text"
        placeholder="URL of image"
        className="w-full border-2  border-black border-r-0"
      />
      <button
        className="border-2 font-bold px-4 py-2 border-black border-l-0"
        type="submit"
      >
        Go
      </button>
    </form>
  );
};

export default InputForm;
