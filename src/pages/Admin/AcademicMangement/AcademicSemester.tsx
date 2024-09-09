import { useGetAllSemestersQuery } from "../../../redux/features/academicSemister/AcademicSemester";

const AcademicSemester = () => {
  const { data } = useGetAllSemestersQuery(undefined);
  console.log(data);
  return (
    <div>
      <h1>This is academic semseter component</h1>
    </div>
  );
};

export default AcademicSemester;
