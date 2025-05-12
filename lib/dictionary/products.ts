import { baseUrl } from "@/lib/config";

export const products = {
    // Success Category
    shoes: {
        id: "shoes",
        image: `${baseUrl}/images/shopping/items/quality/shoes.png`,
        name: "รองเท้าก้าวหน้า",
        tags: {
            face: "นำหน้าทุกคนอยู่เสมอ",
            lip: "ก้าวข้ามทุกอุปสรรค ของชีวิต",
            flower: "ทุกคนชื่นชมในทุกก้าวเดินของเธอ",
            star: "เปี่ยมความสำเร็จผู้คนพาเดินตาม"
        },
        description: [
            "“ด้วยรองเท้าคู่นี้ทุกคนจะมองว่า ",
            "เธอคือผู้ที่เดินไปข้างหน้าอย่างไม่ลดละ",
            "ยิ่งเดินมากเท่าไหร่ ยิ่งประสบความสำเร็จมากกว่าทุกคน”"
        ]
    },
    certificate: {
        id: "certificate",
        image: `${baseUrl}/images/shopping/items/quality/1st_degree.png`,
        name: "ใบเกียรตินิยม",
        tags: {
            face: "ความรู้ไม่เป็นรองใคร",
            lip: "เป็นที่ต้องการของสังคม",
            flower: "พ่อแม่ภาคภูมิใจ",
            star: "ป้องกันคำข่มจากป้าข้างบ้าน"
        },
        description: [
            "“ด้วยเกียรติบัตรใบนี้ทุกคนจะมองว่า",
            "เธอคือผู้เรียนที่ประสบความสำเร็จอย่างสูงสุด",
            "วิชาการเป็นเลิศ เป็นที่ภูมิใจของพ่อแม่”"
        ]
    },
    lottery: {
        id: "lottery",
        image: `${baseUrl}/images/shopping/items/quality/lottery.png`,
        name: "ล็อตเตอรี่มีโชค",
        tags: {
            face: "ลุ้นโอกาสรวย",
            lip: "เลิกทำงานไม่คุ้มเงิน",
            flower: "อัพเกรดฐานะอีกระดับ",
            star: "ผู้คนอยากเข้าหา"
        },
        description: [
            "“ด้วยล็อตเตอรี่ใบนี้ทุกคนจะมองว่า",
            "เธอคือคนที่พร้อมลุ้นโชคให้ตัวเอง",
            "แม้โอกาสเพียงนิดเดียว ก็อาจจะพลิกชีวิตของเธอให้ดีขึ้นได้”"
        ]
    },
    pen: {
        id: "pen",
        image: `${baseUrl}/images/shopping/items/quality/pen.png`,
        name: "ปากกา เกรด A",
        tags: {
            face: "คะแนนดีทุกควิซ",
            lip: "ไม่มีวันสอบตก",
            flower: "ไม่แพ้เพื่อนอีกต่อไป",
            star: "ว่าที่เกียรตินิยมอันดับ 1"
        },
        description: [
            "“ด้วยปากกาแท่งนี้ทุกคนจะมองว่า",
            "เธอคือ ตัวท็อปในทุกสนามสอบ",
            "ข้อสอบยากแค่ไหน เธอจะทำได้ทั้งหมด",
            "และคะแนนเธอจะไม่เป็นที่เปรียบเทียบกับใครที่เหนือกว่า”"
        ] 
    },
    salary: {
        id: "salary",
        image: `${baseUrl}/images/shopping/items/quality/salary_ticket.png`,
        name: "บัตรขึ้นเงินเดือน",
        tags: {
            face: "อัพเกรดฐานะอีกระดับ",
            lip: "เลิกถูกกดขี่ค่าแรง",
            flower: "เลิกเปรียบเทียบกับ เพื่อนร่วมงาน",
            star: "ซื้อความสุขให้ ตัวเองได้มากขึ้น"
        },
        description: [
            "“ด้วยบัตรใบนี้ทุกคนจะมองว่า",
            "เธอคือคนที่สมควรได้รับค่าตอบแทนที่ดี",
            "ความสามารถของคุณ มีค่าเกินที่จะสามารถตีมูลค่าได้”"
        ] 
    },
    position: {
        id: "position",
        image: `${baseUrl}/images/shopping/items/quality/level_ticket.png`,
        name: "บัตรเลื่อนตำแหน่ง",
        tags: {
            face: "อัพเกรดตำแหน่งการงานอีกระดับ",
            lip: "ความสามารถ ถูกค้นพบมากขึ้น",
            flower: "เพิ่มโอกาสเติบโต ในสายงาน",
            star: "ผู้คนเคารพนับถือ"
        },
        description: [
            "“ด้วยบัตรใบนี้ทุกคนจะมองว่า",
            "เธอคือคนที่สมควรได้รับตำแหน่งที่เหมาะสมกับเธอ ",
            "ด้วยความสามารถที่เหลือล้น อย่าหาวนอยู่ที่เดิม”"
        ] 
    },
    job: {
        id: "job",
        image: `${baseUrl}/images/shopping/items/quality/job_ticket.png`,
        name: "บัตรเปลี่ยนงาน",
        tags: {
            face: "เปิดรับโอกาสที่น่าสนใจ",
            lip: "ได้เป็นตัวของตัวเอง",
            flower: "บอกลางานที่ไม่ถูกใจ",
            star: "ต้อนรับสังคมใหม่"
        },
        description: [
            "“เบื่องานเดิม รู้สึกไม่เป็นตัวเอง โอกาสใหม่รออยู่ตรงนี้",
            "แค่พกบัตรเปลี่ยนงานใบนี้ ความน่าเบื่อจะหายไป งานใหม่",
            "เงินเดือนดี บรรยากาศดีกว่าเดิม แค่ถือไว้ก็มีแรงบันดาลใจ",
            "ชีวิตการทำงานจะไม่เหมือนเดิมอีกต่อไป”"
        ] 
    },
    // Confidence Category
    pill: {
        id: "pill",
        image: `${baseUrl}/images/shopping/items/quality/confidence_pill.png`,
        name: "ยาเม็ดมั่นใจ",
        tags: {
            face: "บูสความมั่นเต็มพิกัด",
            lip: "ไม่เกรงกลัวใคร",
            flower: "กล้าคิดกล้าทำ",
            star: "ออร่าเฉิดฉายดั่ง ดาราท่านหนึ่ง"
        },
        description: [
            "“บางทีความกลัวก็ทำให้พลาดโอกาสดีๆ",
            "แค่กลืนยาเม็ดมั่นใจเม็ดนี้ ก็พร้อมลุยทุกสถานการณ์ มั่นหน้า",
            "มั่นใจ ไอเดียบรรเจิด กล้าพูด กล้าทำ",
            "กล้าเป็นตัวเองโดยไม่สนสายตาใคร ความกังวลจะหายไป",
            "มีไว้ชีวิตก็พุ่งทะยานไปข้างหน้า”"
        ] 
    },
    headphones: {
        id: "headphones",
        image: `${baseUrl}/images/shopping/items/quality/headphones.png`,
        name: "หูฟังเบาใจ",
        tags: {
            face: "",
            lip: "",
            flower: "",
            star: ""
        },
        description: [
            ""
        ] 
    },
    potion: {
        id: "potion",
        image: `${baseUrl}/images/shopping/items/quality/potion.png`,
        name: "น้ำยากล้าพูด",
        tags: {
            face: "สกิลปากเต็มร้อย",
            lip: "ทรงอำนาจทุกคำพูด",
            flower: "บูสความมั่นเต็มพิกัด",
            star: "วาจาหวานหู ผู้คนคล้อยตาม"
        },
        description: [
            "“พูดไม่เก่ง? ไม่รู้ว่าจะพูดอะไรดี?",
            "มีเรื่องที่อยากพูดเต็มไปหมดแต่กลัวว่าพอพูดออกไปแล้วจะ",
            "ไม่เข้าหูใครรึเปล่า? กินน้ำยานี้สิ",
            "แล้วเธอจะลืมไปเลยว่าตัวเองเคยกังวลเรื่องอะไรบ้าง”",
        ] 
    },
    camera: {
        id: "camera",
        image: `${baseUrl}/images/shopping/items/quality/camera.png`,
        name: "กล้องภาคภูมิใจ",
        tags: {
            face: "จดจำความทรงจำดี",
            lip: "ลบล้างมลทินในใจ",
            flower: "เปลี่ยนให้ทุกเวลาเป็นโมเมนต์สำคัญ",
            star: "เพิ่มความภูมิใจให้ตัวคุณเอง"
        },
        description: [
            "“กล้องที่จะช่วยเก็บทุกช่วงเวลาที่ทำให้เธอรู้สึกภูมิใจ",
            "ไม่ว่าจะเป็นความสำเร็จเล็กๆ หรือก้าวสำคัญในชีวิต",
            "แค่ถ่ายภาพด้วยกล้องนี้ ภาพที่ได้จะเต็มไปด้วยความรู้สึกดีๆ",
            "ที่ย้ำเตือนว่าเธอเก่งและมีคุณค่า ไม่ว่าจะผ่านไปนานแค่ไหน",
            "แค่หยิบขึ้นมาดูก็จะรู้สึกภูมิใจในตัวเองเสมอ”"
        ] 
    },
    mirror: {
        id: "mirror",
        image: `${baseUrl}/images/shopping/items/quality/mirror.png`,
        name: "กระจกวิเศษ",
        tags: {
            face: "ออร่าพุ่งกว่าใคร",
            lip: "สะท้อนคุณค่าที่ แท้จริงของตนเอง",
            flower: "ไม่สะท้านสายตาใคร",
            star: "ความมั่นใจเกินร้อย"
        },
        description: [
            "“บางครั้งเวลามองกระจก เรามักเห็นแต่ข้อบกพร่อง",
            "สะท้อนให้เห็นความงามในตัวเอง ทั้งความพยายามที่ไม่ยอมแพ้ ",
            "รอยยิ้มที่สดใส และหัวใจที่เข้มแข็ง มองแล้วรู้สึกดี",
            "ยิ่งมองยิ่งรักตัวเอง ใครอยากเพิ่มความมั่นใจ ต้องมีติดตัวไว้”"
        ] 
    },
    // Acceptable Category
    crown: {
        id: "crown",
        image: `${baseUrl}/images/shopping/items/quality/crown.png`,
        name: "มงกุฎแห่งการยอมรับ",
        tags: {
            face: "มีออร่าดั่ง ดาราท่านหนึ่ง",
            lip: "ทรงอำนาจ ทุกคำพูด",
            flower: "สะกดทุกสายตา เมื่อคุณปรากฏตัว",
            star: "เปี่ยมสเน่หา ผู้คนพาเดินตาม"
        },
        description: [
            "“ด้วยมงกุฎนี้ทุกคนจะมองว่า",
            "คุณคือผู้นำที่ประสบความสำเร็จ",
            "ก้าวเข้าไปแล้วดูว่าทุกสายตาจะจับจ้องมาที่คุณ"
        ] 
    },
    book: {
        id: "book",
        image: `${baseUrl}/images/shopping/items/quality/book.png`,
        name: "สมุดบันทึกความดี",
        tags: {
            face: "",
            lip: "",
            flower: "",
            star: ""
        },
        description: [
            ""
        ] 
    },
    card: {
        id: "card",
        image: `${baseUrl}/images/shopping/items/quality/card.png`,
        name: "บัตรอภิชาติบุตร",
        tags: {
            face: "",
            lip: "",
            flower: "",
            star: ""
        },
        description: [
            ""
        ]        
    },
    key: {
        id: "key",
        image: `${baseUrl}/images/shopping/items/quality/key.png`,
        name: "กุญแจเปิดทาง",
        tags: {
            face: "แมสทั่วทุกแพลตฟอร์ม",
            lip: "ลูกหาบพร้อม",
            flower: "ผู้นำเทรนด์สังคม ทุกคนพร้อมตามคุณ",
            star: "เพิ่มโอกาสใหม่ๆ ในอนาคต"
        },
        description: [
            ""
        ]        
    },
    bracelet: {
        id: "bracelet",
        image: `${baseUrl}/images/shopping/items/quality/bracelet.png`,
        name: "Friendship Bracelet",
        tags: {
            face: "",
            lip: "",
            flower: "",
            star: ""
        },
        description: [
            ""
        ]        
    },
    amulet: {
        id: "amulet",
        image: `${baseUrl}/images/shopping/items/quality/amulet.png`,
        name: "เครื่องรางให้อภัยตัวเอง",
        tags: {
            face: "",
            lip: "",
            flower: "",
            star: ""
        },
        description: [
            ""
        ]        
    },      
}