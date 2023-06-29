function Card() {
  return (
    <div className="card">
      <div className="card-header">เข้าสู่ระบบ</div>
      <div className="card-body">
        <div className="input">
          <input
            className="username"
            type="text"
            placeholder="อีเมลหรือหมายเลขโทรศัพท์"
          />
          <input className="password" type="password" placeholder="รหัสผ่าน" />
        </div>
        <button>เข้าสู่ระบบ</button>
        <div className="helper">
          <div>
            <input type="checkbox" defaultChecked />
            <label>จดจำข้อมูลของฉัน</label>
          </div>
          <a>หากต้องการความช่วยเหลือ</a>
        </div>
      </div>
      <div className="card-footer">
        <label>หากยังไม่คุ้นเคยกับ Netflix</label>
        <a>สมัครลงทะเบียนตอนนี้</a>
      </div>
    </div>
  );
}

export default Card;
