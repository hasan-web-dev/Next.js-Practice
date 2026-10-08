type NameInfo = {
    name: string;
};

type AgeInfo = {
    age: number;
};

type Student = NameInfo & AgeInfo;

const studentInfo: Student = {
    name: "Hasan",
    age: 21
};

console.log(studentInfo);