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
          testName: "การตรวจสอบคุณภาพ",
          testNameEn: "Quality Inspection",
          responsibleAgency: "กลุ่มวิศวกรรมวัสดุ",
          price: 3000,
          executionTime: 4,
          testType: "Optional",
          iso17025: false,
          note: "ตรวจสอบก่อนการใช้งาน",
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
          testCode: "T003",
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
          testCode: "T004",
          testName: "การวิเคราะห์การใช้งาน",
          testNameEn: "Operational Analysis",
          responsibleAgency: "กลุ่มวิเคราะห์สมบัติทางกายภาพ",
          price: 5000,
          executionTime: 2,
          testType: "Optional",
          iso17025: true,
          note: "ทดสอบการใช้งานในสภาพแวดล้อมจริง",
          status: "ให้บริการ",
          reason: ""
        },
        {
          testCode: "T005",
          testName: "การตรวจวัดความแม่นยำ",
          testNameEn: "Accuracy Measurement",
          responsibleAgency: "กลุ่มวิเคราะห์สมบัติทางกายภาพ",
          price: 6000,
          executionTime: 3,
          testType: "Mandatory",
          iso17025: true,
          note: "วัดค่าความแม่นยำก่อนการใช้งาน",
          status: "ให้บริการ",
          reason: ""
        }
      ]
    },
    {
      productGroup: "กลุ่มผลิตภัณฑ์การทดสอบวัสดุ",
      productCode: "P003",
      productName: "วัสดุทดสอบความแข็ง",
      productNameEn: "Hardness Test Material",
      serviceStatus: "งดให้บริการ",
      reason: "อุปกรณ์เสียหาย",
      testItems: [
        {
          testCode: "T006",
          testName: "การทดสอบความแข็งวัสดุ",
          testNameEn: "Material Hardness Test",
          responsibleAgency: "กลุ่มสอบเทียบความยาวและมิติ",
          price: 10000,
          executionTime: 7,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบความแข็งของวัสดุ",
          status: "งดให้บริการ",
          reason: "อุปกรณ์เสียหาย"
        },
        {
          testCode: "T007",
          testName: "การทดสอบความแข็งวัสดุ B",
          testNameEn: "Material Hardness Test B",
          responsibleAgency: "กลุ่มสอบเทียบความยาวและมิติ",
          price: 11000,
          executionTime: 7,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบวัสดุชนิด B",
          status: "ให้บริการ",
          reason: ""
        }
      ]
    },
    {
      productGroup: "กลุ่มผลิตภัณฑ์การสอบเทียบเครื่องมือ",
      productCode: "P004",
      productName: "เครื่องมือสอบเทียบเครื่อง A",
      productNameEn: "Instrument Calibration Tool A",
      serviceStatus: "ให้บริการ",
      reason: "",
      testItems: [
        {
          testCode: "T008",
          testName: "การสอบเทียบเครื่องมือ A",
          testNameEn: "Tool A Calibration",
          responsibleAgency: "กลุ่มสอบเทียบมวลและเชิงกล",
          price: 8000,
          executionTime: 4,
          testType: "Optional",
          iso17025: true,
          note: "ทดสอบเครื่องมือ A สำหรับการใช้งาน",
          status: "ให้บริการ",
          reason: ""
        },
        {
          testCode: "T009",
          testName: "การทดสอบความแม่นยำของเครื่องมือ A",
          testNameEn: "Tool A Accuracy Test",
          responsibleAgency: "กลุ่มสอบเทียบมวลและเชิงกล",
          price: 7000,
          executionTime: 3,
          testType: "Optional",
          iso17025: true,
          note: "ทดสอบความแม่นยำของเครื่องมือ A",
          status: "ให้บริการ",
          reason: ""
        }
      ]
    },
    {
      productGroup: "กลุ่มผลิตภัณฑ์การทดสอบทางเคมี",
      productCode: "P005",
      productName: "สารเคมีทดสอบความบริสุทธิ์",
      productNameEn: "Chemical Purity Test Material",
      serviceStatus: "งดให้บริการ",
      reason: "ปัญหาทางเทคนิค",
      testItems: [
        {
          testCode: "T010",
          testName: "การทดสอบความบริสุทธิ์ของสารเคมี",
          testNameEn: "Chemical Purity Test",
          responsibleAgency: "กลุ่มสอบเทียบอุณหภูมิและความชื้น",
          price: 15000,
          executionTime: 10,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบสารเคมีบริสุทธิ์ในระดับสูง",
          status: "งดให้บริการ",
          reason: "ปัญหาทางเทคนิค"
        }
      ]
    },
    {
      productGroup: "กลุ่มผลิตภัณฑ์การทดสอบทางไฟฟ้า",
      productCode: "P006",
      productName: "อุปกรณ์ทดสอบไฟฟ้า A",
      productNameEn: "Electrical Test Device A",
      serviceStatus: "ให้บริการ",
      reason: "",
      testItems: [
        {
          testCode: "T011",
          testName: "การทดสอบอุปกรณ์ไฟฟ้า A",
          testNameEn: "Electrical Device A Test",
          responsibleAgency: "กลุ่มสอบเทียบไฟฟ้า การแพทย์และเคมี",
          price: 12000,
          executionTime: 5,
          testType: "Optional",
          iso17025: true,
          note: "ทดสอบอุปกรณ์ไฟฟ้า A สำหรับการใช้งาน",
          status: "ให้บริการ",
          reason: ""
        }
      ]
    },
    {
      productGroup: "กลุ่มผลิตภัณฑ์การทดสอบทางกล",
      productCode: "P007",
      productName: "วัสดุทดสอบแรงดัน",
      productNameEn: "Pressure Test Material",
      serviceStatus: "ให้บริการ",
      reason: "",
      testItems: [
        {
          testCode: "T012",
          testName: "การทดสอบแรงดันวัสดุ",
          testNameEn: "Pressure Test of Material",
          responsibleAgency: "กลุ่มเคมีอินทรีย์",
          price: 9000,
          executionTime: 6,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบความสามารถในการทนแรงดันของวัสดุ",
          status: "ให้บริการ",
          reason: ""
        }
      ]
    },
    {
      productGroup: "กลุ่มผลิตภัณฑ์การสอบเทียบเครื่องวัดความดัน",
      productCode: "P008",
      productName: "เครื่องวัดความดัน A",
      productNameEn: "Pressure Gauge A",
      serviceStatus: "งดให้บริการ",
      reason: "เครื่องมือชำรุด",
      testItems: [
        {
          testCode: "T013",
          testName: "การสอบเทียบเครื่องวัดความดัน A",
          testNameEn: "Pressure Gauge A Calibration",
          responsibleAgency: "กลุ่มเคมีอนินทรีย์",
          price: 11000,
          executionTime: 8,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบเครื่องวัดความดัน A สำหรับการใช้งาน",
          status: "งดให้บริการ",
          reason: "เครื่องมือชำรุด"
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
          testCode: "T014",
          testName: "การทดสอบความแข็งวัสดุ",
          testNameEn: "Material Hardness Test",
          responsibleAgency: "กลุ่มเคมีอินทรีย์",
          price: 9500,
          executionTime: 4,
          testType: "Mandatory",
          iso17025: true,
          note: "ทดสอบความแข็งของวัสดุ",
          status: "ให้บริการ",
          reason: ""
        }
      ]
    }
];


export const FEE_DATA = [
    {
      id: '1',
      date: "08/10/2024",
      improvementDetail: "ปรับปรุงอัตราค่าธรรมเนียมการทดสอบวัสดุเพื่อให้สอดคล้องกับราคาตลาด",
      document: "adjust_testing_fee_materials.pdf"
    },
    {
      id: '2',
      date: "17/01/2024",
      improvementDetail: "เพิ่มค่าธรรมเนียมสำหรับการสอบเทียบเครื่องมือใหม่ในกลุ่มผลิตภัณฑ์การสอบเทียบเครื่องมือ",
      document: "new_tool_calibration_fee.docx"
    },
    {
      id: '3',
      date: "10/09/2024",
      improvementDetail: "ปรับลดค่าธรรมเนียมการทดสอบทางเคมีเพื่อลดภาระค่าใช้จ่ายสำหรับลูกค้า",
      document: "reduced_chemical_testing_fee.pdf"
    },
    {
      id: '4',
      date: "29/12/2024",
      improvementDetail: "เพิ่มค่าธรรมเนียมการทดสอบทางกลในกลุ่มผลิตภัณฑ์การทดสอบวัสดุ",
      document: "new_mechanical_testing_fee.docx"
    },
    {
      id: '5',
      date: "16/12/2024",
      improvementDetail: "ปรับปรุงรายละเอียดค่าธรรมเนียมการสอบเทียบเครื่องวัดความดันให้ตรงตามมาตรฐานสากล",
      document: "pressure_gauge_calibration_fee.xlsx"
    }
];
