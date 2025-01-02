export const RESPONSIBLE_AGENCY = [
    { id: '1', name: "กลุ่มวิศวกรรมวัสดุ", value: "materials-engineering-group" },
    { id: '2', name: "กลุ่มวิเคราะห์สมบัติทางกายภาพ", value: "physical-properties-analysis-group" },
    { id: '3', name: "กลุ่มวิเคราะห์โครงสร้างและพื้นผิว", value: "structure-and-surface-analysis-group" },
    { id: '4', name: "กลุ่มสอบเทียบความยาวและมิติ", value: "length-and-dimension-calibration-group" },
    { id: '5', name: "กลุ่มสอบเทียบมวลและเชิงกล", value: "mass-and-mechanical-calibration-group" },
    { id: '6', name: "กลุ่มสอบเทียบอุณหภูมิและความชื้น", value: "temperature-and-humidity-calibration-group" },
    { id: '7', name: "กลุ่มสอบเทียบไฟฟ้า การแพทย์และเคมี", value: "electrical-medical-and-chemical-calibration-group" },
    { id: '8', name: "กลุ่มเคมีอินทรีย์", value: "organic-chemistry-group" },
    { id: '9', name: "กลุ่มเคมีอนินทรีย์", value: "inorganic-chemistry-group" },
    { id: '10', name: "กลุ่มสิ่งแวดล้อม", value: "environmental-group" },
    { id: '11', name: "กลุ่มชีวเคมี", value: "biochemistry-group" },
    { id: '12', name: "กลุ่มเทคโนโลยีชีวภาพ", value: "biotechnology-group" },
    { id: '13', name: "กลุ่มจุลชีววิทยาโมเลกุล", value: "molecular-microbiology-group" },
    { id: '14', name: "กลุ่มบริหารระบบคุณภาพ", value: "quality-management-group" },
    { id: '15', name: "กลุ่มบริหารจัดการเครื่องมือและความปลอดภัยในห้องปฏิบัติการ", value: "lab-safety-and-equipment-management-group" },
    { id: '16', name: "กลุ่มบริการวิเคราะห์ทดสอบและสอบเทียบ", value: "testing-and-calibration-service-group" },
    { id: '17', name: "กลุ่มอำนวยการ", value: "administrative-group" },
    { id: '18', name: "กลุ่มการเงินและพัสดุ", value: "finance-and-supplies-group" },
    { id: '19', name: "กลุ่มบริหารโครงการ", value: "project-management-group" }
];

export const PRODUCT_GROUPS = [
    {
      productGroupId: "PG001",
      productGroupName: "กลุ่มผลิตภัณฑ์เครื่องมือวิทยาศาสตร์",
      productGroupNameEn: "Scientific Instrument Products",
      productType: "สอบเทียบ",
      responsibleAgency: "กลุ่มวิศวกรรมวัสดุ",
      serviceStatus: "ให้บริการ",
      reason: ""
    },
    {
      productGroupId: "PG002",
      productGroupName: "กลุ่มผลิตภัณฑ์การสอบเทียบอุปกรณ์",
      productGroupNameEn: "Equipment Calibration Products",
      productType: "สอบเทียบ",
      responsibleAgency: "กลุ่มวิเคราะห์สมบัติทางกายภาพ",
      serviceStatus: "ให้บริการ",
      reason: ""
    },
    {
      productGroupId: "PG003",
      productGroupName: "กลุ่มผลิตภัณฑ์การทดสอบวัสดุ",
      productGroupNameEn: "Material Testing Products",
      productType: "ทดสอบ",
      responsibleAgency: "กลุ่มสอบเทียบความยาวและมิติ",
      serviceStatus: "งดให้บริการ",
      reason: "อุปกรณ์เสียหาย"
    },
    {
      productGroupId: "PG004",
      productGroupName: "กลุ่มผลิตภัณฑ์การสอบเทียบเครื่องมือ",
      productGroupNameEn: "Instrument Calibration Products",
      productType: "สอบเทียบ",
      responsibleAgency: "กลุ่มสอบเทียบมวลและเชิงกล",
      serviceStatus: "ให้บริการ",
      reason: ""
    },
    {
      productGroupId: "PG005",
      productGroupName: "กลุ่มผลิตภัณฑ์การทดสอบทางเคมี",
      productGroupNameEn: "Chemical Testing Products",
      productType: "ทดสอบ",
      responsibleAgency: "กลุ่มสอบเทียบอุณหภูมิและความชื้น",
      serviceStatus: "งดให้บริการ",
      reason: "ปัญหาทางเทคนิค"
    },
    {
      productGroupId: "PG006",
      productGroupName: "กลุ่มผลิตภัณฑ์การทดสอบทางไฟฟ้า",
      productGroupNameEn: "Electrical Testing Products",
      productType: "ทดสอบ",
      responsibleAgency: "กลุ่มสอบเทียบไฟฟ้า การแพทย์และเคมี",
      serviceStatus: "ให้บริการ",
      reason: ""
    },
    {
      productGroupId: "PG007",
      productGroupName: "กลุ่มผลิตภัณฑ์การทดสอบทางกล",
      productGroupNameEn: "Mechanical Testing Products",
      productType: "ทดสอบ",
      responsibleAgency: "กลุ่มเคมีอินทรีย์",
      serviceStatus: "ให้บริการ",
      reason: ""
    },
    {
      productGroupId: "PG008",
      productGroupName: "กลุ่มผลิตภัณฑ์การสอบเทียบเครื่องวัดความดัน",
      productGroupNameEn: "Pressure Gauge Calibration Products",
      productType: "สอบเทียบ",
      responsibleAgency: "กลุ่มเคมีอนินทรีย์",
      serviceStatus: "งดให้บริการ",
      reason: "เครื่องมือชำรุด"
    },
    {
      productGroupId: "PG009",
      productGroupName: "กลุ่มผลิตภัณฑ์การทดสอบความแข็ง",
      productGroupNameEn: "Hardness Testing Products",
      productType: "ทดสอบ",
      responsibleAgency: "กลุ่มบริการวิเคราะห์ทดสอบและสอบเทียบ",
      serviceStatus: "ให้บริการ",
      reason: ""
    }
];

export const PRODUCTS = [
    {
      productGroup: "กลุ่มผลิตภัณฑ์เครื่องมือวิทยาศาสตร์",
      productCode: "P001",
      productName: "เครื่องมือวิทยาศาสตร์รุ่น X",
      productNameEn: "Scientific Instrument Model X",
      serviceStatus: "ให้บริการ",
      reason: "",
      testItems: [
        {
          testCode: "T001",
          testName: "การสอบเทียบเครื่องมือ",
          testNameEn: "Instrument Calibration",
          responsibleAgency: "กลุ่มวิศวกรรมวัสดุ",
          price: 5000,
          executionTime: 5,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบเครื่องมือใหม่",
          status: "ให้บริการ",
          reason: ""
        },
        {
          testCode: "T002",
          testName: "การทดสอบความแม่นยำของเครื่องมือ",
          testNameEn: "Instrument Precision Test",
          responsibleAgency: "กลุ่มวิศวกรรมวัสดุ",
          price: 6000,
          executionTime: 4,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบความแม่นยำในการวัด",
          status: "ให้บริการ",
          reason: ""
        },
        {
          testCode: "T003",
          testName: "การทดสอบความเสถียรของเครื่องมือ",
          testNameEn: "Instrument Stability Test",
          responsibleAgency: "กลุ่มวิศวกรรมวัสดุ",
          price: 4500,
          executionTime: 3,
          testType: "Optional",
          iso17025: true,
          note: "ทดสอบความเสถียรของเครื่องมือในสภาพแวดล้อมต่างๆ",
          status: "ให้บริการ",
          reason: ""
        }
      ]
    },
    {
      productGroup: "กลุ่มผลิตภัณฑ์การสอบเทียบอุปกรณ์",
      productCode: "P002",
      productName: "อุปกรณ์สอบเทียบเครื่องมือ A",
      productNameEn: "Equipment Calibration Device A",
      serviceStatus: "ให้บริการ",
      reason: "",
      testItems: [
        {
          testCode: "T002",
          testName: "การสอบเทียบเครื่องมือ A",
          testNameEn: "Device A Calibration",
          responsibleAgency: "กลุ่มวิเคราะห์สมบัติทางกายภาพ",
          price: 7000,
          executionTime: 3,
          testType: "Optional",
          iso17025: true,
          note: "ทดสอบเฉพาะอุปกรณ์รุ่น A",
          status: "ให้บริการ",
          reason: ""
        },
        {
          testCode: "T003",
          testName: "การทดสอบประสิทธิภาพของอุปกรณ์ A",
          testNameEn: "Device A Performance Test",
          responsibleAgency: "กลุ่มวิเคราะห์สมบัติทางกายภาพ",
          price: 8000,
          executionTime: 4,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบประสิทธิภาพและความแม่นยำของอุปกรณ์ A",
          status: "ให้บริการ",
          reason: ""
        },
        {
          testCode: "T004",
          testName: "การทดสอบความทนทานของอุปกรณ์ A",
          testNameEn: "Device A Durability Test",
          responsibleAgency: "กลุ่มวิเคราะห์สมบัติทางกายภาพ",
          price: 7500,
          executionTime: 5,
          testType: "Optional",
          iso17025: true,
          note: "ทดสอบความทนทานของอุปกรณ์ A ต่อสภาพแวดล้อมต่างๆ",
          status: "ให้บริการ",
          reason: ""
        }
      ]
    },
    {
      productGroup: "กลุ่มผลิตภัณฑ์การทดสอบความแข็ง",
      productCode: "P009",
      productName: "วัสดุทดสอบความแข็ง",
      productNameEn: "Hardness Test Material",
      serviceStatus: "ให้บริการ",
      reason: "",
      testItems: [
        {
          testCode: "T009",
          testName: "การทดสอบความแข็งวัสดุ",
          testNameEn: "Material Hardness Test",
          responsibleAgency: "กลุ่มบริการวิเคราะห์ทดสอบและสอบเทียบ",
          price: 13000,
          executionTime: 6,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบความแข็งของวัสดุ",
          status: "ให้บริการ",
          reason: ""
        },
        {
          testCode: "T010",
          testName: "การทดสอบความต้านทานการสึกหรอของวัสดุ",
          testNameEn: "Material Wear Resistance Test",
          responsibleAgency: "กลุ่มบริการวิเคราะห์ทดสอบและสอบเทียบ",
          price: 15000,
          executionTime: 7,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบความต้านทานการสึกหรอของวัสดุที่ใช้ในอุตสาหกรรม",
          status: "ให้บริการ",
          reason: ""
        },
        {
          testCode: "T011",
          testName: "การทดสอบความต้านทานแรงดันวัสดุ",
          testNameEn: "Material Pressure Resistance Test",
          responsibleAgency: "กลุ่มบริการวิเคราะห์ทดสอบและสอบเทียบ",
          price: 12000,
          executionTime: 5,
          testType: "Optional",
          iso17025: true,
          note: "ทดสอบความต้านทานแรงดันของวัสดุ",
          status: "ให้บริการ",
          reason: ""
        }
      ]
    }
];