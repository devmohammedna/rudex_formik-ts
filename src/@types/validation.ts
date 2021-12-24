export interface FormSchema {
  jopTitle: string,
   jopField: string,
  jopLocation: string,
  startDate: Date | string,
  endDate?: Date | string,
  currentlyWork?: boolean,
  description: string,
  companyName: string,
  companyAdress: string,
  companyIndustry: string,
  companySize: number,
  companySector: string,
  supervisorName: string,
  supervisedEmployees: number,
  leavingReazon: string,
  startSalary: number,
  endSalary: number,
  currency: string,
}
