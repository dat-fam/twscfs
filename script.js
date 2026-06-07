
// ======================================
// DEVICE ID
// ======================================

function getDeviceId(){

    let id =
    localStorage.getItem(
        "deviceId"
    );

    if(!id){

        id =
        crypto.randomUUID();

        localStorage.setItem(
            "deviceId",
            id
        );

    }

    return id;

}

// =================================================================
// 🔥 HỆ THỐNG STREAK CHUẨN (TỐI ƯU THEO TO-DATE-STRING)
// =================================================================

function getCurrentStreak(){
    try {
        const streak = JSON.parse(localStorage.getItem("streak"));
        if(!streak) return 0;
        return streak.count || 0;
    } catch(e) {
        return 0;
    }
}

// Hàm tính khoảng cách ngày đặc chủng cho định dạng .toDateString() của ông
function getDaysBetween(dateStr1, dateStr2) {
    if (!dateStr1 || !dateStr2) return 0;
    
    // Tự động ép chuỗi chữ toDateString() ngược lại thành kiểu dữ liệu Date của Javascript
    const d1 = new Date(dateStr1);
    const d2 = new Date(dateStr2);
    
    const diffTime = Math.abs(d2 - d1);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
const button = document.getElementById("fortuneBtn");
const shareBtn = document.getElementById("shareBtn");
const fortuneText = document.getElementById("fortuneText");
const luck = document.getElementById("luckBox");
const cardTitle = document.getElementById("cardTitle");
const nicknameInput = document.getElementById("nicknameInput");
const image = document.getElementById("fortuneImage");
const saveBtn = document.getElementById("saveBtn");
const historyBtn = document.getElementById("historyBtn");
const historyList = document.getElementById("historyList");
const favoriteBtn = document.getElementById("favoriteBtn");
const favoriteListBtn = document.getElementById("favoriteListBtn");
const favoriteList = document.getElementById("favoriteList");
const badgeBox = document.getElementById("badgeBox");

const captureArea = document.getElementById("captureArea"); // ⭐ FIX QUAN TRỌNG
const images = ["2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg",
 "tws (2).jpg", "tws (3).jpg", "tws (4).jpg", "tws (5).jpg",
"tws (6).jpg", "tws (7).jpg", "tws (8).jpg", "tws (9).jpg", "tws (10).jpg",
"tws (11).jpg", "tws (12).jpg", "tws (13).jpg", "tws (14).jpg", "tws (15).jpg",
"tws (16).jpg", "tws (17).jpg", "tws (18).jpg", "tws (19).jpg", "tws (20).jpg",
"tws (21).jpg", "tws (22).jpg", "tws (23).jpg", "tws (24).jpg", "tws (25).jpg",
"tws (26).jpg", "tws (27).jpg", "tws (28).jpg", "tws (29).jpg", "tws (30).jpg",
"tws (31).jpg", "tws (32).jpg", "tws (33).jpg", "tws (34).jpg", "tws (35).jpg",
"tws (36).jpg", "tws (37).jpg", "tws (38).jpg", "tws (39).jpg", "tws (40).jpg",
"tws (41).jpg", "tws (42).jpg", "tws (43).jpg", "tws (44).jpg", "tws (45).jpg",
"tws (46).jpg",  "tws (48).jpg", "tws (49).jpg", "tws (50).jpg",
"tws (51).jpg", "tws (52).jpg", "tws (53).jpg", "tws (54).jpg", "tws (55).jpg",
"tws (56).jpg", "tws (57).jpg", "tws (58).jpg", "tws (59).jpg", "tws (60).jpg",
"tws (61).jpg", "tws (62).jpg", "tws (63).jpg", "tws (64).jpg", 
 "tws (67).jpg",  "tws (69).jpg", 
"tws (71).jpg", "tws (72).jpg", "tws (73).jpg", "tws (74).jpg", "tws (75).jpg",
"tws (76).jpg", "tws (77).jpg", "tws (78).jpg", "tws (79).jpg", "tws (80).jpg",
"tws (81).jpg", "tws (82).jpg", "tws (83).jpg", "tws (84).jpg", "tws (85).jpg",
"tws (86).jpg", "tws (87).jpg",   
"tws (91).jpg", "tws (92).jpg",  "tws (95).jpg",
"tws (97).jpg",  "tws (99).jpg", 
"tws (101).jpg", "tws (103).jpg", "tws (104).jpg", 
"tws (106).jpg", "tws (107).jpg", "tws (108).jpg", "tws (109).jpg", "tws (110).jpg",
"tws (111).jpg",  "tws (113).jpg", 
 "tws (117).jpg", "tws (118).jpg", "tws (119).jpg", "tws (120).jpg",
 "tws (123).jpg", "tws (124).jpg", "tws (125).jpg",
"tws (126).jpg", "tws (127).jpg", "tws (128).jpg", "tws (129).jpg", "tws (130).jpg",
"tws (131).jpg", "tws (132).jpg", "tws (133).jpg", "tws (134).jpg", "tws (135).jpg",
"tws (136).jpg", "tws (137).jpg", "tws (138).jpg", "tws (139).jpg", "tws (140).jpg",
"tws (141).jpg", "tws (142).jpg", "tws (143).jpg", "tws (144).jpg", "tws (145).jpg",
"tws (146).jpg", "tws (147).jpg", "tws (148).jpg", "tws (149).jpg", "tws (150).jpg",
"tws (151).jpg", "tws (152).jpg", "tws (153).jpg", "tws (154).jpg", "tws (155).jpg",
"tws (156).jpg", "tws (157).jpg",  "tws (159).jpg", "tws (160).jpg",
 "tws (164).jpg", "tws (165).jpg",
"tws (166).jpg", 
 "tws (172).jpg", "tws (173).jpg", "tws (174).jpg", "tws (175).jpg",
"tws (176).jpg",  "tws (179).jpg", ,
"tws (181).jpg", "tws (182).jpg", "tws (183).jpg", "tws (184).jpg", "tws (185).jpg",
"tws (186).jpg", "tws (187).jpg", "tws (188).jpg", "tws (189).jpg", "tws (190).jpg",
 "tws (193).jpg", "tws (194).jpg", "tws (195).jpg",
"tws (196).jpg", "tws (197).jpg", "tws (199).jpg", 
"tws (201).jpg", "tws (202).jpg", "tws (203).jpg", "tws (204).jpg", "tws (205).jpg",
"tws (206).jpg", "tws (207).jpg", "tws (208).jpg", "tws (209).jpg", "tws (210).jpg",
"tws (211).jpg", "tws (212).jpg", "tws (213).jpg", "tws (214).jpg", "tws (215).jpg",
 "tws (217).jpg", "tws (219).jpg", "tws (220).jpg",];

// ======================
// TODAY
// ======================
function getToday() {
    return new Date().toDateString();
}

//Bật tắt nhạc nền
if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play();
            musicBtn.textContent = "Pause 🎵";
             musicBtn.classList.add("active");
        } else {

            bgMusic.pause();
            musicBtn.textContent = "Music 🎵";
            musicBtn.classList.remove("active");
        }

    });

}
// ======================
// LIMIT 1 NGÀY
// ======================
function canGetToday() {
    const saved = JSON.parse(localStorage.getItem("dailyFortune"));
    return !(saved && saved.date === getToday());
}


// 1. ĐỒNG BỘ TRẠNG THÁI NÚT FAVORITE (Bất đồng bộ)
//==========
async function updateFavoriteButton() {
    const currentText = fortuneText.textContent.trim();
    
    // Nếu chưa lật card hoặc đang ở chữ mặc định, đưa nút về trạng thái tắt
    if (currentText === "Click the button beside" || currentText === "") {
        favoriteBtn.classList.remove("active");
        favoriteBtn.textContent = "Favorite 🖤";
        return;
    }

    // Đọc danh sách mảng yêu thích từ bộ nhớ lớn IndexedDB
    const favorites = await localforage.getItem("favorites") || [];
    const exists = favorites.some(item => item.text === currentText);

    if (exists) {
        favoriteBtn.classList.add("active");
        favoriteBtn.textContent = "Favorited ❤️";
    } else {
        favoriteBtn.classList.remove("active");
        favoriteBtn.textContent = "Favorite 🖤";
    }
}

// ======================
// 2. LOAD SAVED FORTUNE (Đồng bộ chuẩn theo cấu trúc lưu của bạn)
// ======================
async function loadSavedFortune() {
    // Đọc quẻ bói của ngày hôm nay đã được lưu trong localStorage
    const saved = JSON.parse(localStorage.getItem("dailyFortune")); 

    if (saved && saved.date === getToday()) {
        // 🌟 GIỮ NGUYÊN TIÊU ĐỀ NICKNAME: Nếu lúc lưu có gán title thì trả lại, không thì dùng mặc định
        cardTitle.textContent = saved.title || "TWS's confession OTD";
        fortuneText.textContent = saved.text; 
        luck.textContent = `Luck: ${saved.luck}%`;
        
        // 🌟 ĐỒNG BỘ ẢNH CHUẨN: Đọc chính xác trường "image" từ localStorage của bạn
        if (saved.image) {
            // Nếu chuỗi ảnh bạn lưu đã có sẵn chữ "images/" thì gán thẳng, nếu chưa có thì tự động bù vào
            if (saved.image.startsWith("images/") || saved.image.startsWith("http")) {
                image.src = saved.image;
            } else {
                image.src = `images/${saved.image}`;
            }
        }

        // 🌟 2. ĐOẠN SỬA CHÍ MẠNG: Khôi phục hiệu ứng trùng khớp 100% với logic bốc quẻ của bạn
        // Xóa sạch các class hiệu ứng cũ để tránh bị chồng chéo class
        fortuneCard.classList.remove("glowHolo", "glow", "soft-glow", "flash");

        // Khôi phục hiệu ứng khi F5 (Đã bổ sung xóa và thêm twinkleFlash)
        fortuneCard.classList.remove("glowHolo", "glow", "soft-glow", "flash", "twinkleFlash");
        // 🌟 DÁN CHÈN DÒNG NÀY VÀO ĐÂY ĐỂ ĐỊNH NGHĨA BIẾN (SỬA LỖI ĐỎ DÒNG 156)
        const currentLuck = parseInt(saved.luck) || 0;

        if (currentLuck >= 95) {
            fortuneCard.classList.add("glowHolo");
        } else if (currentLuck >= 90) {
            fortuneCard.classList.add("glow");
        } else if (currentLuck >= 85) {
            fortuneCard.classList.add("twinkleFlash"); // 🌟 Khôi phục đốm sáng li ti khi F5
        } else if (currentLuck >= 80) {
            fortuneCard.classList.add("flash");        // Khôi phục flash cũ của bạn khi F5
        } else if (currentLuck >= 70) {
            fortuneCard.classList.add("soft-glow");
        }

        // 🌟 CHÈN DÒNG NÀY: Để kích hoạt rải sao ngay khi vừa F5 tải lại trang
        initTwinkleStars();

        // Kích hoạt lại dòng thác sao vô tận ngay khi vừa F5 tải lại trang
        startInfiniteSparkles(currentLuck);
                
        // Ẩn ô nhập nickname đi vì hôm nay họ đã nhận quẻ rồi
        if (nicknameInput) {
            const inputGroup = nicknameInput.parentElement;
            if (inputGroup) inputGroup.style.display = "none";
        }

        // Tự động gán danh hiệu Rank tiếng Anh theo số ngày streak tương ứng
        let currentStreak = 0;
        if (saved && typeof saved.streak !== "undefined") {
            currentStreak = parseInt(saved.streak) || 0;
        } else {
            const streakElement = document.getElementById("streakBox");
            if (streakElement) {
                currentStreak = parseInt(streakElement.textContent.replace(/[^0-9]/g, "")) || 0;
            }
        }
        updateBadgeByStreak(currentStreak);

        // Chờ đồng bộ trạng thái sáng/tối của nút Favorite ngoài màn hình chính
        await updateFavoriteButton(); 

        // Khóa nút bốc quẻ và chuyển trạng thái chữ thông báo
        const btnFortune = document.getElementById("fortuneBtn");
        if (btnFortune) {
            btnFortune.disabled = true;
            btnFortune.textContent = "Come back tomorrow ✨";
        }
    }
}

// ======================
// HIỆU ỨNG GÕ CHỮ (TYPING EFFECT)
// ======================
let typingTimeout; // Biến tạm để quản lý bộ đếm thời gian gõ chữ
function typeWriter(element, text, speed = 40) {
    // Xóa sạch nội dung cũ trước khi gõ
    element.textContent = ""; 
    clearTimeout(typingTimeout); // Xóa bộ đếm cũ nếu người dùng bấm nút liên tục

    let i = 0;
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            // Cứ sau mỗi x miligiây (speed) sẽ gõ thêm 1 ký tự
            typingTimeout = setTimeout(type, speed); 
        }
    }
    type();
}

// ======================
// MAIN BUTTON
// ======================
button.addEventListener("click", () => {

    if (!canGetToday()) {
        alert("You've already received today's confession!");
        return;
    }
    if (nicknameInput && nicknameInput.value.trim() !== "") {
    localStorage.setItem("saved_nickname", nicknameInput.value.trim());
}
    // 🌟 LOGIC ĐỔI TIÊU ĐỀ THEO NICKNAME
    const nickname = nicknameInput.value.trim();
    let currentTitle = "TWS's confession OTD";
    
    if (nickname !== "") {
        currentTitle = `TWS Confess To ${nickname}`;
    }
    cardTitle.textContent = currentTitle;

    if (bgMusic) bgMusic.play();

    if (nicknameInput) {
    // Ẩn toàn bộ cụm input-group chứa ô nhập để giao diện Control Panel gọn gàng hơn
    const inputGroup = nicknameInput.parentElement;
    if (inputGroup) {
        inputGroup.style.display = "none";
    }
    }
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    const luckValue = Math.floor(Math.random() * 33) + 67;
    const randomImage = images[Math.floor(Math.random() * images.length)];

    typeWriter(fortuneText, randomFortune.text);
    luck.textContent = `Luck: ${luckValue}%`;
    image.src = `images/${randomImage}`;

    //Đoạn này là panel holo
    const actionsPanel =
    document.querySelector(
        ".actions"
    );

    if(luckValue >= 95){

        actionsPanel.classList.add(
            "legendary"
        );

    }
    else{

        actionsPanel.classList.remove(
            "legendary"
        );

    }
    // SAVE DAILY
    localStorage.setItem("dailyFortune", JSON.stringify({
        date: getToday(),
        text: randomFortune.text,
        luck: luckValue,
        image: randomImage
        
    }));

        // 🏆 ĐẨY ĐIỂM SỐ LUCK LÊN MẠNG ĐỂ XẾP HẠNG TOÀN CẦU
    setTimeout(async () => {
        let inputName = nicknameInput ? nicknameInput.value.trim() : "";
        
        if (inputName === "") {
            let promptedName = prompt("🎉 EXCELLENT LUCK! Please enter your nickname to register on the online leaderboard💙");
            if (promptedName && promptedName.trim() !== "") {
                inputName = promptedName.trim().substring(0, 15);
                if (nicknameInput) nicknameInput.value = inputName;
            } else {
                inputName = "Anonymous Fan 💙";
            }
        } else {
            alert(`🎉 Congratulations! Your ${luckValue}% Luck score is being synced to the online leaderboard! 🏆`);
        }

        const now = new Date();
        const timeStr = now.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });

        // Thay thế dòng cũ bằng dòng này để dọn dẹp khoảng trắng
        const todayStr = getToday().replace(/[\/\s]/g, "-");
        
        await db
        .from("leaderboard")
        .upsert({

            device_id:
            getDeviceId(),

            name:
            inputName,

            luck:
            luckValue,

            streak:
            getCurrentStreak(),

            date:
            getToday(),

            time:
            timeStr,

            timestamp:
            now.getTime()

        },
        {
            onConflict:
            "device_id,date"
        });

    }, 1000);

    updateFavoriteButton();

    // HISTORY
    const history = JSON.parse(localStorage.getItem("history")) || [];

    history.unshift({
        date: getToday(),
        text: randomFortune.text,
        luck: luckValue,
        image: randomImage
    });

    history.splice(30);

    localStorage.setItem(
    "history",
    JSON.stringify(history)
    );

    localStorage.setItem("history", JSON.stringify(history));

    // EFFECTS
    fortuneCard.classList.add("shake");

    setTimeout(() => {
        fortuneCard.classList.remove("shake");
    }, 500);

    // SPARKLE
    // 🌟 TĂNG SỐ HẠT + KÍCH HOẠT CHẾ ĐỘ THẺ ĐẶC BIỆT THEO LUCK
    // Mặc định thẻ thường sẽ bắn 150 hạt liên tục
    let totalSparkles = 150; 

    // Nếu trúng thẻ đặc biệt (Luck >= 95% tương ứng với glowHolo), nhân gấp 3 lần số hạt (450 hạt)
    if (luckValue >= 95) {
        totalSparkles = 450; 
    }

    // Kích hoạt dòng thác sao phun liên tục mãi mãi cho quẻ mới bốc
    startInfiniteSparkles(luckValue);

    // GLOW RESET + APPLY (Đã bổ sung xóa và thêm twinkleFlash)
    fortuneCard.classList.remove("glowHolo", "glow", "soft-glow", "flash", "twinkleFlash");

    if (luckValue >= 95) {
        fortuneCard.classList.add("glowHolo");
    } else if (luckValue >= 90) {
        fortuneCard.classList.add("glow");
    } else if (luckValue >= 85) {
        fortuneCard.classList.add("twinkleFlash"); // 🌟 THÊM MỚI: Mốc điểm ra đốm sáng li ti
    } else if (luckValue >= 80) {
        fortuneCard.classList.add("flash");        // Giữ nguyên flash cũ của bạn ở mốc 80
    } else if (luckValue >= 70) {
        fortuneCard.classList.add("soft-glow");
    }
    // 🌟 CHÈN DÒNG NÀY: Để kích hoạt rải sao ngay khi vừa bốc trúng quẻ
    initTwinkleStars();
});

// ======================
// SHARE
// ======================
shareBtn.addEventListener(
"click",
async () => {

    try {

        shareBtn.textContent =
        "⏳ Preparing HD card...";

        shareBtn.disabled = true;

        // 🚀 KHÓA CẢM BIẾN VÀ ÉP PHẲNG CỨNG LẬP TỨC
        fortuneCard.classList.add("exporting");
        fortuneCard.style.transform = "rotateX(0deg) rotateY(0deg)";
        fortuneCard.style.boxShadow = "none";
        fortuneCard.style.transition = "none";

        // Đợi 250ms để điện thoại trả bài về góc thẳng đứng hoàn hảo
        await new Promise(resolve => setTimeout(resolve, 250));

        const scale = 5;

        const dataUrl =
        await domtoimage.toPng(
            captureArea,
            {
                width:
                captureArea.offsetWidth * scale,

                height:
                captureArea.offsetHeight * scale,

                style:{
                    transform:
                    `scale(${scale})`,

                    transformOrigin:
                    "top left",

                    width:
                    captureArea.offsetWidth + "px",

                    height:
                    captureArea.offsetHeight + "px"
                },

                cacheBust:true
            }
        );

        const blob =
        await (
            await fetch(dataUrl)
        ).blob();

        const file =
        new File(
            [blob],
            "tws-confession.png",
            {
                type:"image/png"
            }
        );

        // SHARE ẢNH
        if(
            navigator.canShare &&
            navigator.canShare({
                files:[file]
            })
        ){

            shareBtn.textContent =
            "📤 Opening share menu...";

            await navigator.share({
                files:[file]

            });

            shareStatus.textContent =
"Choose 'Save Image' in the share menu to save it to Photos";

        }
        // FALLBACK
        else{
            const imageWindow =
            window.open(
                "",
                "_blank"
            );
            imageWindow.document.write(`
                <!DOCTYPE html>
                <html>
                <head>
                    <title>TWS Confession</title>

                    <style>

                    body{
                        margin:0;
                        background:black;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        min-height:100vh;
                        flex-direction:column;
                        color:white;
                        font-family:sans-serif;
                    }

                    img{
                        max-width:100%;
                        max-height:90vh;
                    }

                    p{
                        padding:20px;
                        text-align:center;
                    }
                    </style>
                </head>

                <body>
                    <img src="${dataUrl}">
                    <p>
                    📸 Long press the image and choose
                    <br>
                    "Save Image"
                    </p>

                </body>
                </html>
            `);
            shareStatus.textContent =
            "📸 Image opened. Long press to save.";
        }
    }
    catch(error){
        if(
            error.name ===
            "AbortError"
        ){
            shareBtn.textContent =
            "Share cancelled ❌";
        }
        else{
            console.error(error);

            shareBtn.textContent =
            "❌ Unable to create image.";
        }
    }
    finally{
        shareBtn.disabled = false;
        setTimeout(() => {
            shareBtn.textContent = "Share Card📤";
            shareStatus.textContent = "";

            // 🚀 TRẢ LẠI TRANSITION VÀ MỞ KHÓA CẢM BIẾN
            fortuneCard.style.transition = "transform 0.15s ease-out, box-shadow 0.15s ease-out";
            fortuneCard.classList.remove("exporting");
        }, 2000);
    }
});



// ======================
// HISTORY (Đã tích hợp lún nút và đổi màu khi ẩn/hiện)
// ======================
if (historyBtn) {
    historyBtn.addEventListener("click", () => {
        // 1. Kiểm tra nếu danh sách đang mở (block) thì ĐÓNG lại và nhả nút ra
        if (historyList.style.display === "block") {
            historyList.style.display = "none";
            historyBtn.classList.remove("active"); // Nhả nút về bình thường
            return; // Dừng hàm lại luôn, không cần chạy logic render bên dưới nữa
        }

        // 2. Nếu danh sách đang đóng -> TIẾN HÀNH MỞ, LÚN NÚT VÀ ĐỔI MÀU
        historyList.style.display = "block";
        historyBtn.classList.add("active"); // Giữ nút lún xuống và đổi màu

        // 3. Đọc dữ liệu từ localStorage và vẽ giao diện như cũ của bạn
        const history = JSON.parse(localStorage.getItem("history")) || [];

        if (history.length === 0) {
            historyList.innerHTML = "<div style='padding: 10px; color: #3b82f6;'>No history yet 📜</div>";
        } else {
            historyList.innerHTML = history.slice(0, 20).map(item => `
                <div style="padding: 5px 0;">
                    <strong style="color: #60a5fa;">${item.date}</strong><br>
                    <span style="color: #cbd5e1;">${item.text}</span><br>
                    <small style="color: #facc15;">✨ ${item.luck}%</small>
                    <hr style="border: 0; border-top: 1px dashed rgba(255,255,255,0.2); margin: 8px 0;">
                </div>
            `).join("");
        }
    });
}


// ======================
// 3. NÚT FAVORITE: CHỤP ẢNH HD VÀ LƯU VÀO BỘ NHỚ LỚN (Đồng bộ cảm biến)
// ======================
favoriteBtn.addEventListener("click", async () => {
    const currentText = fortuneText.textContent.trim();

    if (currentText === "Click the button beside" || currentText === "") {
        alert("Receive a confession first!");
        return;
    }

    // Đọc mảng dữ liệu từ IndexedDB bằng cú pháp await độc lập
    let favorites = await localforage.getItem("favorites") || [];
    const index = favorites.findIndex(item => item.text === currentText);

    // THỬ NGHIỆM 1: ĐÃ FAVORITE TRƯỚC ĐÓ -> TIẾN HÀNH BỎ THÍCH
    if (index !== -1) {
        favorites.splice(index, 1);
        await localforage.setItem("favorites", favorites); // Lưu lại mảng mới đã xóa phần tử
        await updateFavoriteButton();
        
        // Nếu danh sách đang mở trên màn hình thì vẽ lại giao diện ngay lập tức
        if (favoriteList.style.display === "block") {
            renderFavoriteListItems(favorites);
        }
        return;
    }

    // THỬ NGHIỆM 2: CHƯA FAVORITE -> TIẾN HÀNH CHỤP ẢNH HD
    favoriteBtn.textContent = "Saving HD Card... ⏳";
    favoriteBtn.disabled = true;

    // 🚀 KHÓA CẢM BIẾN VÀ ÉP PHẲNG CỨNG LẬP TỨC
    fortuneCard.classList.add("exporting");
    fortuneCard.style.transform = "rotateX(0deg) rotateY(0deg)";
    fortuneCard.style.boxShadow = "none";
    fortuneCard.style.transition = "none";

    // Đợi 250ms để điện thoại kịp làm phẳng hoàn toàn bề mặt Card
    await new Promise(resolve => setTimeout(resolve, 250));

    const captureArea = document.getElementById("captureArea");
    
    // Thuật toán nhân bản kích thước (Scale) để tăng mật độ điểm ảnh cho bức hình sắc nét hơn
    const width = captureArea.offsetWidth;
    const height = captureArea.offsetHeight;
    const scale = 5; // Bạn đang để scale 5 cực nét, giữ nguyên theo ý bạn nhé!

    domtoimage.toPng(captureArea, {
        width: width * scale,
        height: height * scale,
        style: {
            transform: `scale(${scale})`,
            transformOrigin: 'top left',
            width: width + 'px',
            height: height + 'px'
        },
        quality: 1.0 // Giữ nguyên phổ màu và chất lượng ảnh
    })
    .then(async (dataUrl) => {
        // Thêm bản ghi mới chứa ảnh chụp Base64 (dataUrl) vào đầu mảng
        favorites.unshift({
            date: getToday(),
            title: cardTitle.textContent.trim(),
            text: currentText,
            luck: luck.textContent.trim(),
            cardImageCaptured: dataUrl 
        });

        // Ghi thẳng mảng này vào IndexedDB (Dung lượng lưu trữ thoải mái lên đến hàng trăm MB)
        await localforage.setItem("favorites", favorites);
        
        favoriteBtn.disabled = false;
        await updateFavoriteButton();
        
        // Cập nhật lại giao diện danh sách nếu đang bật
        if (favoriteList.style.display === "block") {
            renderFavoriteListItems(favorites);
        }
    })
    .catch((error) => {
        console.error("Lỗi chụp ảnh card HD:", error);
        favoriteBtn.disabled = false;
        updateFavoriteButton();
        alert("Failed to capture HD card image. Please try again!");
    })
    .finally(() => {
        // 🚀 ĐOẠN THÊM MỚI BẮT BUỘC: Trả lại thuộc tính transition và mở khóa cảm biến lắc tay
        if (fortuneCard) {
            fortuneCard.style.transition = "transform 0.15s ease-out, box-shadow 0.15s ease-out";
            fortuneCard.classList.remove("exporting");
        }
    });
});

// ======================
// 4. BẬT / ẨN DANH SÁCH FAVORITE
// ======================
favoriteListBtn.addEventListener("click", async () => {
    const favorites = await localforage.getItem("favorites") || [];

    if (favoriteList.style.display === "block") {
        favoriteList.style.display = "none";
        favoriteListBtn.classList.remove("active");
    } else {
        favoriteList.style.display = "block";
        renderFavoriteListItems(favorites);
        favoriteListBtn.classList.add("active");
    }
});


// Hàm phụ trách render giao diện danh sách yêu thích kèm Ảnh thu nhỏ (Thumbnail) và nút Xóa nhanh
function renderFavoriteListItems(favorites) {
    if (favorites.length === 0) {
        favoriteList.innerHTML = "<div style='padding: 10px; color: #3b82f6;'>No favorites yet 💙</div>";
    } else {
        favoriteList.innerHTML = favorites.map((item, index) => `
            <div class="favItem-wrapper" style="display: flex; justify-content: space-between; align-items: center; padding: 10px 5px; border-bottom: 1px dashed rgba(255,255,255,0.2);">
                
                <!-- Vùng thông tin chính (Gộp Ảnh nhỏ + Chữ) - Click vào để mở ảnh to ở tab mới -->
                <div class="favItem" onclick="openFavoriteCaptured(${index})" style="cursor: pointer; flex-grow: 1; display: flex; align-items: center; gap: 12px; text-align: left; padding-right: 10px;">
                    
                    <!-- 📸 THÀNH PHẦN THÊM MỚI: Ảnh Card thu nhỏ dạng Thumbnail -->
                    <img src="${item.cardImageCaptured}" alt="Thumb" style="width: 50px; height: 65px; object-fit: cover; border-radius: 6px; border: 1px solid rgba(255,255,255,0.2); box-shadow: 0 4px 8px rgba(0,0,0,0.3); flex-shrink: 0;">
                    
                    <!-- Phần nội dung chữ -->
                    <div style="min-width: 0; flex-grow: 1;">
                        <strong style="color: #60a5fa; font-size: 13px;">${item.date}</strong><br>
                        <span style="font-size: 14px; color: #cbd5e1; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 160px; margin: 2px 0;">${item.text}</span>
                        <small style="color: #facc15; font-size: 11px;">${item.luck}</small>
                    </div>
                </div>
                
                <!-- Nút Xóa nhanh hình dấu X màu đỏ -->
                <button class="delete-fav-btn" onclick="deleteFavoriteItem(event, ${index})" style="background: none; border: none; color: #ef4444; font-size: 16px; cursor: pointer; padding: 5px 8px; transition: transform 0.2s; flex-shrink: 0;">
                    ❌
                </button>
            </div>
        `).join("");
    }
}


//=====================
// 5. HÀM XỬ LÝ XÓA NHANH ITEM TRÊN LIST (Bấm dấu ❌)
//=====================
window.deleteFavoriteItem = async function(event, index) {
    // Ngăn chặn sự kiện click lan ra vùng favItem bên ngoài (tránh việc vừa xóa vừa mở tab mới)
    event.stopPropagation(); 
    
    if (confirm("Do you want to remove this card from favorites?")) {
        let favorites = await localforage.getItem("favorites") || [];
        
        favorites.splice(index, 1);
        await localforage.setItem("favorites", favorites); // Cập nhật lại IndexedDB
        
        await updateFavoriteButton(); // Cập nhật lại trạng thái nút Favorite ngoài màn hình chính
        renderFavoriteListItems(favorites); // Vẽ lại danh sách mới
        // Chèn vào cuối hàm deleteFavoriteItem sau khi xóa thành công:
        if (favorites.length === 0) {
            favoriteList.style.display = "none"; // Ẩn khung list trống đi
            favoriteListBtn.classList.remove("active"); // Nhả nút Favorites List về trạng thái phẳng
        }

    }
};

//=====================
// 6. MỞ ẢNH CARD ĐÃ LƯU TRÊN TAB MỚI (Bản Fix lỗi nút Share trên Điện thoại)
//=====================
window.openFavoriteCaptured = function(index) {
    const newWindow = window.open("", "_blank");
    
    if (!newWindow) {
        alert("Please allow pop-ups for this website to view the saved card.");
        return;
    }
    
    newWindow.document.write("<html><body><h3 style='color:#3b82f6; text-align:center; margin-top:20%; font-family:sans-serif;'>Loading Your HD Card... ⏳</h3></body></html>");

    localforage.getItem("favorites").then((favorites) => {
        favorites = favorites || [];
        const selectedItem = favorites[index];
        
        if (selectedItem && selectedItem.cardImageCaptured) {
            newWindow.document.open();
            newWindow.document.write(`
                <html>
                <head>
                    <title>Saved Card - ${selectedItem.date}</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            margin: 0; background: #0f172a;
                            display: flex; flex-direction: column;
                            justify-content: center; align-items: center;
                            min-height: 100vh; font-family: sans-serif;
                        }
                        .container { text-align: center; padding: 20px; box-sizing: border-box; width: 100%; }
                        img {
                            max-width: 90vw; max-height: 75vh;
                            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
                            border-radius: 12px; display: block; margin: 0 auto 20px auto;
                        }
                        .btn-group {
                            display: flex; gap: 12px; justify-content: center; align-items: center; flex-wrap: wrap;
                        }
                        .btn-action {
                            color: white; border: none; padding: 12px 24px;
                            font-size: 15px; font-weight: bold; border-radius: 8px;
                            cursor: pointer; text-decoration: none; display: inline-flex;
                            align-items: center; gap: 6px; box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                            transition: background 0.2s, transform 0.1s;
                        }
                        .btn-action:active { transform: scale(0.98); }
                        .btn-download { background: #3b82f6; }
                        .btn-download:hover { background: #2563eb; }
                        .btn-share { background: #10b981; }
                        .btn-share:hover { background: #059669; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <img src="${selectedItem.cardImageCaptured}" alt="Captured Card">
                        
                        <div class="btn-group">
                            <a href="${selectedItem.cardImageCaptured}" download="TWS-Favorite-${selectedItem.date}.png" class="btn-action btn-download">
                                📸 Download Card
                            </a>
                            <button id="tabShareBtn" class="btn-action btn-share">
                                📤 Share Card
                            </button>
                        </div>
                    </div>

                    <script>
                        const base64Data = "${selectedItem.cardImageCaptured}";
                        const cardDate = "${selectedItem.date}";
                        const shareBtn = document.getElementById("tabShareBtn");

                        shareBtn.addEventListener("click", async () => {
                            try {
                                shareBtn.textContent = "Processing... ⏳";
                                shareBtn.disabled = true;

                                // 🚀 GIẢI PHÁP ĐẶC TRỊ: Dùng fetch đổi Base64 sang Blob mượt mà chuẩn 100% trên Safari/Chrome
                                const response = await fetch(base64Data);
                                const blob = await response.blob();
                                
                                // Tạo file ảnh PNG thực tế từ Blob
                                const file = new File([blob], "TWS-Confession-" + cardDate + ".png", { type: "image/png" });

                                // Kiểm tra quyền canShare hệ thống
                                if (navigator.canShare && navigator.canShare({ files: [file] })) {
                                    await navigator.share({
                                        files: [file],
                                        title: "TWS's Confession 💙",
                                        text: "Check out my sweet sweet memory from TWS! ✨"
                                    });
                                } else {
                                    alert("Canceled");
                                }
                            } catch (error) {
                                console.error("Lỗi chia sẻ file:", error);
                                alert("Error sharing the card. Please try downloading it instead.");
                            } finally {
                                shareBtn.textContent = "📤 Share Card";
                                shareBtn.disabled = false;
                            }
                        });
                    <\/script>
                </body>
                </html>
            `);
            newWindow.document.close();
        } else {
            newWindow.close();
            alert("Image data not found!");
        }
    }).catch((err) => {
        console.error(err);
        if (newWindow) newWindow.close();
    });
};



// ======================
// HÀM KIỂM TRA THIẾT BỊ DI ĐỘNG (Điện thoại/Máy tính bảng)
// ======================
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// ======================
// SAVE IMAGE (TỰ ĐỘNG PHÂN PHỐI PC / MOBILE & GIỮ NGUYÊN FIX BO GÓC)
// ======================
saveBtn.addEventListener("click", async () => {
    
    // 🌟 MẸO FIX CHỦ ĐỘNG: Ngắt bộ gõ chữ và ép hiện đầy đủ câu confession trước khi chụp
    if (typeof typingTimeout !== "undefined") clearTimeout(typingTimeout);
    const saved = JSON.parse(localStorage.getItem("dailyFortune"));
    if (saved) {
        fortuneText.textContent = saved.text; // Trả lại toàn bộ câu chữ gốc để chụp
    } else if (fortuneText.textContent.trim() === "Click the button beside" || fortuneText.textContent.trim() === "") {
        alert("Receive a confession first!");
        return;
    }

    saveBtn.textContent = "Generating HD Image... 📸";
    saveBtn.disabled = true;

    // 1. Kích hoạt class exporting để khóa cảm biến lắc tay lại ngay lập tức
    fortuneCard.classList.add("exporting");
    // 🚀 MẸO CHÍ MẠNG: Xóa sạch sành sanh các thuộc tính transform và shadow do con quay hồi chuyển vừa gán vào
    fortuneCard.style.transform = "rotateX(0deg) rotateY(0deg)";
    fortuneCard.style.boxShadow = "none";
    fortuneCard.style.transition = "none"; // Tắt transition tạm thời để bài giật thẳng đứng ngay lập tức

    // 1. Lưu lại trạng thái hiệu ứng hiện tại của Card (Giữ nguyên logic của bạn)
    const hasSoftGlow = fortuneCard.classList.contains("soft-glow");
    const hasFlash = fortuneCard.classList.contains("flash");
    const hasGlowHolo = fortuneCard.classList.contains("glowHolo");
    const scale = 5; // Độ nét cực cao 5x

    // 2. Gỡ bỏ TẤT CẢ hiệu ứng chuyển động/đổ bóng để tránh lỗi bộ dựng SVG
    fortuneCard.classList.add("exporting");

    // 3. Đợi một khoảng thời gian cực ngắn (50ms) để trình duyệt cập nhật lại DOM phẳng
    await new Promise(resolve => setTimeout(resolve, 250));

    // 4. Tiến hành chụp vùng captureArea bằng dom-to-image-more
    domtoimage.toPng(captureArea, {
        width: fortuneCard.offsetWidth * scale,   // Dùng offsetWidth chuẩn hơn scrollWidth khi có bo góc
        height: fortuneCard.offsetHeight * scale, // Dùng offsetHeight để ôm sát viền thực tế
        style: {
            'borderRadius': "45px",  // Cố định bo góc 45px cho ảnh xuất ra giống cấu hình cũ của bạn
            'transform': `scale(${scale})`,
            'transform-origin': 'top left',
            'width': fortuneCard.offsetWidth + 'px',
            'height': fortuneCard.offsetHeight + 'px',
            'overflow': 'hidden',
            'background-color': '#ffffff',
            'box-shadow': 'none', 
            'margin': '0',
            'padding': '0',         
        },
        cacheBust: true                   // Buộc xóa cache ảnh cũ để lấy ảnh random mới nhất
    })
    .then((dataUrl) => {
        // Lấy ngày hôm nay để đặt tên file (Nếu chưa có hàm getToday() thì dùng định dạng mặc định)
        const dateStr = typeof getToday === "function" ? getToday() : new Date().toLocaleDateString("vi-VN").replace(/\//g, "-");
        const fileName = `TWS-Confession-${dateStr}.png`;

        if (isMobileDevice()) {
            // --- XỬ LÝ TRÊN ĐIỆN THOẠI (iPhone/Android) ---
            // Mở tab mới hiển thị ảnh chất lượng cao và hướng dẫn người dùng ấn giữ để lưu ảnh
            const newWindow = window.open();
            newWindow.document.write(`
                <html>
                <head>
                    <title>Save Your Card 📸</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                            margin: 0; background: #0f172a; color: #fff;
                            display: flex; flex-direction: column;
                            justify-content: center; align-items: center;
                            min-height: 100vh; font-family: sans-serif; text-align: center;
                            padding: 15px; box-sizing: border-box;
                        }
                        .guide-box {
                            background: rgba(59, 130, 246, 0.2);
                            border: 1px solid #3b82f6; border-radius: 10px;
                            padding: 12px 20px; margin-bottom: 15px; max-width: 90vw;
                            font-size: 15px; line-height: 1.4; box-shadow: 0 4px 15px rgba(0,0,0,0.3);
                        }
                        img {
                            max-width: 100%; max-height: 70vh;
                            box-shadow: 0 10px 30px rgba(0,0,0,0.5); border-radius: 12px;
                        }
                        .back-tip { margin-top: 15px; font-size: 13px; color: #94a3b8; }
                    </style>
                </head>
                <body>
                    <div class="guide-box">
                        💡 <strong>Hướng dẫn lưu ảnh trên điện thoại:</strong><br>
                        Chạm và <strong>ấn giữ vào bức ảnh</strong> bên dưới khoảng 2 giây, sau đó chọn <strong>"Lưu vào ảnh" (Save to Photos)</strong> hoặc <strong>"Tải hình ảnh xuống"</strong> nhé! 💙
                    </div>
                    <img src="${dataUrl}" alt="Your Card">
                    <div class="back-tip">Sau khi lưu xong, bạn có thể đóng tab này để quay lại ứng dụng.</div>
                </body>
                </html>
            `);
            newWindow.document.close();
        } else {
            // --- XỬ LÝ TRÊN MÁY TÍNH (PC) ---
            // Kích hoạt tính năng tự động tải tệp xuống thư mục Downloads như cũ
            const link = document.createElement("a");
            link.download = fileName;
            link.href = dataUrl;
            link.click();
        }
    })
    .catch((error) => {
        console.error("Lỗi xuất ảnh:", error);
        alert("Failed to generate HD image. Please try again!");

        // 🌟 ĐOẠN SỬA CHÍ MẠNG: Bảo vệ nhạc nền không bị tắt khi Save ảnh lỗi
        if (bgMusic && !bgMusic.paused) {
            bgMusic.play().catch(err => console.log("Nhạc đang phát bình thường"));
        }
    })
    .finally(() => {
        // Khôi phục lại chữ trên nút bấm và trả lại class gốc cho Card
        saveBtn.textContent = "Save Card (PC) 📸";
        saveBtn.disabled = false;

        // 🚀 MẸO MỚI: Trả lại thuộc tính transition mượt mà cho card trước khi gỡ exporting
        fortuneCard.style.transition = "transform 0.15s ease-out, box-shadow 0.15s ease-out";
        
        fortuneCard.classList.remove("exporting");
    });
});



// =================================================================
// 📸 HIỆU ỨNG NGHIÊNG CARD 3D KHI DI CHUỘT (CHỈ DÀNH RIÊNG CHO PC)
// =================================================================
if (fortuneCard) {
    fortuneCard.addEventListener("mousemove", (e) => {
        // Nếu card đang trong quá trình chụp ảnh xuất file (Save/Fav), chặn không cho nghiêng
        if (fortuneCard.classList.contains("exporting")) return;

        const cardRect = fortuneCard.getBoundingClientRect();
        
        // Tính toán vị trí của con trỏ chuột so với tâm của chiếc Card
        const x = e.clientX - cardRect.left; 
        const y = e.clientY - cardRect.top; 
        
        const midCardX = cardRect.width / 2;
        const midCardY = cardRect.height / 2;
        
        const maxRotation = 15; // Giới hạn góc nghiêng tối đa là 15 độ
        
        const rotateX = ((midCardY - y) / midCardY) * maxRotation;
        const rotateY = ((x - midCardX) / midCardX) * maxRotation;
        
        // Áp dụng hiệu ứng xoay 3D và đẩy nhẹ bóng đổ theo hướng nghiêng
        fortuneCard.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        fortuneCard.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(0, 0, 0, 0.2)`;
    });

    // Khi người dùng rê chuột ra khỏi chiếc Card -> Trả chiếc Card về trạng thái phẳng đứng ban đầu
    fortuneCard.addEventListener("mouseleave", () => {
        fortuneCard.style.transform = "rotateX(0deg) rotateY(0deg)";
        fortuneCard.style.boxShadow = ""; 
    });
}


// ===================================================
// CONTROL WELCOME MODAL (Hiện 1 lần duy nhất trong ngày)
// ===================================================
function initWelcomeModal() {
    const modal = document.getElementById("welcomeModal");
    const closeBtn = document.getElementById("closeModalBtn");
    if (!modal || !closeBtn) return;

    const todayStr = getToday(); // Lấy ngày hôm nay (vi-VN)
    const lastOpenedDate = localStorage.getItem("modalLastOpened");

    // 🚀 THỬ NGHIỆM THÔNG MINH: Nếu hôm nay chưa mở bảng lần nào, tiến hành hiện bảng lên
    if (lastOpenedDate !== todayStr) {
        // Thêm một chút trì hoãn nhẹ 400ms sau khi trang load xong nhìn cho mượt mà
        setTimeout(() => {
            modal.classList.add("show");
        }, 400);
    }

    // Sự kiện khi bấm vào nút Đóng bảng thông báo
    closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        
        // Ghim ngày hôm nay vào bộ nhớ để lần sau vào lại trong ngày sẽ không bị hiện bảng đè nữa
        localStorage.setItem("modalLastOpened", todayStr);

        // 🎵 MẸO FIX ĐẶC BIỆT: Tận dụng lượt bấm chuột này để xin quyền phát nhạc nền mượt mà cho cả iPhone
        if (bgMusic && bgMusic.paused) {
            bgMusic.play().then(() => {
                if (musicBtn) {
                    musicBtn.textContent = "Pause 🎵";
                    musicBtn.classList.add("active");
                }
            }).catch(err => console.log("Chờ người dùng tương tác thêm"));
        }

        // 2. 🎥 ÉP PHÁT VIDEO NỀN YOUTUBE (Đã được tối ưu hóa đặc trị lỗi đứng hình)
            if (player && typeof player.playVideo === "function") {
                player.mute(); // Đảm bảo tắt tiếng hoàn toàn để trình duyệt mở khóa quyền phát
                player.playVideo();
                console.log("🚀 Đã kích nổ lệnh phát video nền thành công!");
                }

    });
}

// Gọi hàm khởi tạo thông báo đầu trang
initWelcomeModal();


// ======================
// 1. HÀM KIỂM TRA VÀ CẬP NHẬT STREAK NGÀY LIÊN TIẾP
// ======================
// Hàm tự động đổi danh hiệu dựa trên số ngày streak
function updateBadgeByStreak(streakDays) {
    if (!badgeBox) return;
    
    let title = "🥉 Newbie "; // Mặc định 0 - 2 ngày
    
    if (streakDays >= 3 && streakDays < 7) {
        title = "🥈 Trainee Fan ";
    } else if (streakDays >= 7 && streakDays < 15) {
        title = "🥇 TWS's Soulmate ";
     } else if (streakDays >= 15 && streakDays < 30) {
        title = "💎 Ultimate Loyal Fan ";   //  ĐÃ ĐỔI: 15 - 29 ngày (Ngọt ngào hơn)
    } else if (streakDays >= 30) {
        title = "👑 TWS's No.1 Priority ";    // 30 ngày trở lên
    }
    
    badgeBox.textContent = title;
}


// ======================
// STREAK
// ======================
function updateStreak() {
    const today = getToday();

    const streak = JSON.parse(localStorage.getItem("streak")) || {
        count: 0,
        lastDate: null
    };

    if (streak.lastDate === today) return;

    // Kiểm tra xem có bị đứt streak (quên vào trang) không
    if (streak.lastDate !== null) {
        const daysPassed = getDaysBetween(streak.lastDate, today);
        
        if (daysPassed > 1) {
            // Quá 1 ngày không vào -> Reset về 1
            console.warn(`💔 Đứt Streak! Tự động reset về 1.`);
            streak.count = 1;
        } else {
            // Đúng ngày hôm sau vào -> Tăng tiếp tục
            streak.count++;
        }
    } else {
        // Lần đầu tiên điểm danh
        streak.count = 1;
    }

    streak.lastDate = today;
    localStorage.setItem("streak", JSON.stringify(streak));
    
    loadStreak();
}

function loadStreak() {
    const streakBox = document.getElementById("streakBox");
    if (!streakBox) return;

    const count = getCurrentStreak();
    
    if (count > 0) {
        streakBox.textContent = `🔥 Streak: ${count} days`;
    } else {
        streakBox.textContent = `🔥 Streak: 0 days`;
    }
    // =================================================================
    // 🔥 ĐOẠN CHÈN THÊM: TỰ ĐỘNG KHÔI PHỤC NICKNAME CŨ KHI NGƯỜI DÙNG F5
    // =================================================================
    const nicknameInput = document.getElementById("nicknameInput");
    
    if (nicknameInput) {
        // 1. Kiểm tra xem trong bộ nhớ đệm 'dailyFortune' cũ của ông có lưu tên không
        const savedFortune = JSON.parse(localStorage.getItem("dailyFortune"));
        
        // 2. Nếu có tên cũ từ quẻ, hoặc có tên lưu lẻ ở LocalStorage thì bốc ra
        let oldName = "";
        if (savedFortune && savedFortune.nickname) {
            oldName = savedFortune.nickname;
        } else {
            oldName = localStorage.getItem("user_nickname") || localStorage.getItem("nickname");
        }

        // 3. Điền ngược cái tên đó vào lại ô nhập chữ để F5 không bị trống rỗng
        if (oldName) {
            nicknameInput.value = oldName;
            console.log(`🙋‍♂️ Hệ thống đã tự hồi sinh lại Nickname cũ khi F5: ${oldName}`);
        }
    }
}


// Biến toàn cục giữ trục thời gian phun sao vô tận
let sparkleInterval = null;

// ===================================================
// 1. HÀM TẠO HẠT LẤP LÁNH (Đã gộp: Ngẫu nhiên vị trí + Trộn 4 loại hạt)
// ===================================================
function createSparkle() {
    // 🚀 Nếu card đang trong quá trình chụp ảnh xuất file (Save/Share/Fav), chặn hoàn toàn không tạo hạt mới
    if (!fortuneCard || fortuneCard.classList.contains("exporting")) return;

    const sparkle = document.createElement("div");

    // 🎲 MẸO TRỘN HẠT: Chọn ngẫu nhiên 1 trong 4 loại kiểu dáng lấp lánh
    const types = ["sparkle", "sparkle-star", "sparkle-heart", "sparkle-diamond"];
    const randomType = types[Math.floor(Math.random() * types.length)];
    sparkle.classList.add(randomType);

    // Thừa hưởng logic lấy kích thước chuẩn chiếc card gốc của bạn
    const rect = fortuneCard.getBoundingClientRect();

    // Định vị ngẫu nhiên 100% rải rác trên toàn bộ chiều rộng và chiều cao của Card
    sparkle.style.left = Math.random() * rect.width + "px";
    sparkle.style.top = Math.random() * rect.height + "px";
    sparkle.style.pointerEvents = "none";

    fortuneCard.appendChild(sparkle);

    // Xóa hạt sau 800ms đúng theo thông số hiệu ứng gốc của bạn để giải phóng RAM
    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

// ===================================================
// 2. HÀM KÍCH HOẠT PHUN SAO LIÊN TỤC VÔ HẠN (Tự động nhân số hạt theo Luck)
// ===================================================
function startInfiniteSparkles(luckVal) {
    if (sparkleInterval) clearInterval(sparkleInterval);

    // Mặc định thẻ thường: Cứ mỗi 60ms sinh ra 1 hạt lấp lánh ngẫu nhiên
    let spawnSpeed = 60; 

    // Chế độ thẻ đặc biệt (Luck >= 95%): Phun dày đặc cứ mỗi 20ms sinh ra 1 hạt (Gấp 3 lần)
    if (luckVal >= 95) {
        spawnSpeed = 20; 
    }

    sparkleInterval = setInterval(createSparkle, spawnSpeed);
}


// ===================================================
// HÀM RẢI NGÔI SAO 4 CÁNH CHỚP TẮT NGẪU NHIÊN 100%
// ===================================================
function initTwinkleStars() {
    if (!fortuneCard) return;

    // Xóa sạch các ngôi sao cũ nếu có để tránh bị nhân đôi gây nặng máy
    const oldStars = fortuneCard.querySelectorAll(".twinkle-star-fixed");
    oldStars.forEach(s => s.remove());

    // Chỉ sinh sao nếu chiếc bài hôm nay trúng class twinkleFlash
    if (!fortuneCard.classList.contains("twinkleFlash")) return;

    const rect = fortuneCard.getBoundingClientRect();
    const starCount = 35; // Số lượng ngôi sao thưa thớt, vừa vặn

    for (let i = 0; i < starCount; i++) {
        const star = document.createElement("div");
        star.classList.add("twinkle-star-fixed");

        // Rải tọa độ ngẫu nhiên 100% không theo hàng lối
        star.style.left = Math.random() * (rect.width - 20) + 10 + "px";
        star.style.top = Math.random() * (rect.height - 20) + 10 + "px";

        // Gán ngẫu nhiên 1 trong 3 kiểu animation chớp tắt lệch nhịp
        const animTypes = ["twinkleRandom1", "twinkleRandom2", "twinkleRandom3"];
        const randomAnim = animTypes[Math.floor(Math.random() * animTypes.length)];
        
        // Tạo thời gian chạy ngẫu nhiên từ 1.2s - 2.5s để các hạt nhấp nháy so le hoàn toàn
        const randomDuration = Math.random() * 1.3 + 1.2;
        star.style.animation = `${randomAnim} ${randomDuration}s ease-in-out infinite`;

        fortuneCard.appendChild(star);
    }
}

// ===================================================
// 3. HÀM DỌN SẠCH HẠT NGAY LẬP TỨC (Dành cho 3 nút Save/Share/Fav)
// ===================================================
function stopSparkles() {
    if (sparkleInterval) {
        clearInterval(sparkleInterval);
        sparkleInterval = null;
    }
    // Tìm và xóa sạch tất cả các hạt đang hiển thị dở trên card để ảnh chụp sạch sẽ 100%
    const activeSparkles = fortuneCard.querySelectorAll(".sparkle, .sparkle-star, .sparkle-heart, .sparkle-diamond");
    activeSparkles.forEach(s => s.remove());
}

updateStreak();
loadStreak();
loadSavedFortune();


// =================================================================
// 🎥 YOUTUBE BACKGROUND PLAYLIST RANDOM AUTO NEXT (BẢN TỐI ƯU TOÀN DIỆN)
// =================================================================

const YOUTUBE_VIDEO_POOL = [
"MiO16KlMPaU", // you you y
"tTi2uZQsmlo", // all the positives y
"2Rj5ila0eCg", // here for you y
"EawadPfQmf4", // hey hey  //lỗi 150
"l_XsIzsGK4M", // nice to meet you again  //lỗi 150
"NRgZuuwD2WY", // S N // lỗi 150
"TzbGBkEh9ms", // over drive  //lỗi 150
"hVAc1Vf2ITU", // plot twist //lỗi bản quyền 150
"ZtYJMjx3dGw", // BFF y
"YPg1sA0qNpo", // oh my my 7s y
"uOGaKdb60WE", // lucky to be loved by you y
"j8EAE3_uoYM", // Snow Prince - SS501 y
"Fml-CS29e5U", // nice to meet you again - japan ver  //lỗi 150
"fT3opSWeRpM", // aqua man shinyu y
"6iQWTvqe3ZA", // yes or no dohoon  //lỗi 150
"0e1vbMytbnw", // japanese song youngjae  //lỗi 150
"aD7Qj8N_0DE", // polaroid love hanjin y
"YPmpeQg0SFo", // face to face jihoon  //lỗi 150
"kfbJylW4wME", // loving you girl kyungmin y
"p7hQT_eXgus", // first time shinyu y
"kS67hJ9pPCY", // first meet dohoon y
"N6p6sFrhVzU", // first time youngjae y
"4-6YTELs17A", // first time hanjin y
"gseTKZATbGQ", // first time jihoon y
"vzGHoYmd71E", // first time kyungmin y
];

// Khai báo các biến quản lý trạng thái player toàn cục
let player = null;
let shuffledList = [];
let currentIndex = 0;

// 🎵 1. Sự kiện kích nổ âm thanh và video khi người dùng click lần đầu
document.addEventListener(
"click",
() => {
// Phát nhạc nền Audio (nếu có biến bgMusic định nghĩa trước)
if (typeof bgMusic !== "undefined" && bgMusic) {
bgMusic.play().then(() => {
if (typeof musicBtn !== "undefined" && musicBtn) {
musicBtn.textContent = "Pause 🎵";
musicBtn.classList.add("active");
}
}).catch(err => console.log("Chờ tương tác âm thanh:", err));
}

    // 🌟 Ép video YouTube phát ngay lập tức khi click
    if (player && typeof player.playVideo === "function") {
        player.mute(); // Bắt buộc tắt tiếng video nhúng để vượt qua chính sách trình duyệt
        player.playVideo();
        console.log("🚀 Người dùng tương tác: Đã kích nổ phát video nền YouTube thành công!");
    }
},
{ once: true } // Chỉ chạy duy nhất một lần khi vừa vào trang

);

// 2. Nhúng YouTube Iframe API
(function(){
const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScript = document.getElementsByTagName("script")[0];
firstScript.parentNode.insertBefore(tag, firstScript);
})();

// 3. Thuật toán trộn bài ngẫu nhiên chuẩn (Fisher-Yates) giúp bài hát không bị trùng lặp
function shufflePlaylist(array) {
const arr = [...array];
for (let i = arr.length - 1; i > 0; i--) {
const j = Math.floor(Math.random() * (i + 1));
[arr[i], arr[j]] = [arr[j], arr[i]];
}
return arr;
}

// 4. Hàm chuyển sang mã video tiếp theo trong danh sách đã trộn
function playNextVideo() {
currentIndex++;

// Nếu phát hết danh sách thì tự động trộn lại phát vòng lặp mới
if (currentIndex >= shuffledList.length) {
    console.log("🔄 Đã phát hết danh sách, tiến hành trộn lại playlist mới...");
    shuffledList = shufflePlaylist(YOUTUBE_VIDEO_POOL);
    currentIndex = 0;
}

const nextVideoId = shuffledList[currentIndex];
console.log(`⏭️ Đang tải video tiếp theo [Bài số ${currentIndex + 1}/${shuffledList.length}]:`, nextVideoId);

if (player && typeof player.loadVideoById === "function") {
    player.loadVideoById({
        videoId: nextVideoId,
        suggestedQuality: "default"
    });
}
//cái này thêm vào sau hàm cmt
// Nếu người dùng đang mở chế độ Mini Concert thì tự động đổi phòng chat theo mã video mới
if (document.getElementById("liveChatPanel").style.display === "block") {
fetchCommentsForCurrentVideo();

}

}

// 5. Hàm bắt lỗi video: Ghi nhận mã lỗi, console log chi tiết và nhảy bài ngay
function onVideoError(event) {
const errorMessages = {
2: "Mã ID video không hợp lệ hoặc sai cấu trúc.",
5: "Video lỗi không thể phát trên trình phát HTML5.",
100: "Video không tồn tại, đã bị xóa hoặc được đặt ở chế độ Riêng tư.",
101: "Bị chặn phát trên Iframe (Chủ sở hữu cấm nhúng trang web ngoài).",
150: "Lỗi bản quyền hoặc chặn khu vực địa lý quốc gia (giống mã lỗi 101)."
};

const currentVideoId = shuffledList[currentIndex] || "Không xác định";
const detailReason = errorMessages[event.data] || "Lỗi hệ thống không xác định từ YouTube.";

console.error(`❌ Video lỗi: ${currentVideoId}`);
console.error(`⚠️ Error code: ${event.data} -> Lý do: ${detailReason}`);
console.log("➡️ Đang tự động bỏ qua video lỗi và chuyển sang bài tiếp theo...");

// Kích hoạt chuyển mã video ngay lập tức
playNextVideo();

}

// 6. Theo dõi trạng thái phát (Để tự chuyển bài khi video chạy hết giây cuối)
function onPlayerStateChange(event) {
// YT.PlayerState.ENDED ứng với giá trị số 0
if (event.data === window.YT.PlayerState.ENDED) {
console.log("🎵 Bài hát đã kết thúc bình thường.");
playNextVideo();
}
}

// 7. Khởi tạo YouTube Player khi API tải xong
function onYouTubeIframeAPIReady(){
// Trộn danh sách ngẫu nhiên ngay khi ứng dụng bắt đầu
shuffledList = shufflePlaylist(YOUTUBE_VIDEO_POOL);
console.log("🎬 Danh sách phát đã được trộn ngẫu nhiên:", shuffledList);

player = new YT.Player("youtubeBgVideo", {
    videoId: shuffledList[currentIndex], // Load trực tiếp video đầu tiên trong hàng đợi
    playerVars: {
        autoplay: 1,
        controls: 0,
        rel: 0,
        mute: 1,
        playsinline: 1,
        disablekb: 1,
        modestbranding: 1
    },
    events: {
        onReady: function(event) {
            event.target.mute();
            event.target.playVideo();
            console.log(`▶️ Đang phát video mở màn: ${shuffledList[currentIndex]}`);
        },
        onStateChange: onPlayerStateChange, // Lắng nghe sự kiện để tự động Next bài
        onError: onVideoError               // Lắng nghe lỗi để xử lý nhảy bài lỗi
    }
});

}

// =================================================================
// 👁️ CHỨC NĂNG ẨN GIAO DIỆN VÀO ICON PNG VÀ PHÒNG LIVE STREAM (ĐỒNG BỘ NÂNG CẤP)
// =================================================================

const actionsBox = document.querySelector(".actions");
const appBox = document.querySelector(".app-container");
const miniIcon = document.getElementById("floatingEnvelope");

if (actionsBox && appBox && miniIcon) {
    // 1. TỰ SINH NÚT BẤM ẨN GIAO DIỆN VÀO CONTROL PANEL
    const hideBtn = document.createElement("button");

    hideBtn.className = "";
hideBtn.id = "hideAppBtn";
hideBtn.innerHTML = "Mini Concert 🔍";
actionsBox.appendChild(hideBtn);

// Sự kiện khi bấm nút ẩn App (Kích hoạt Mini Concert)
hideBtn.addEventListener("click", (e) => {
    e.stopPropagation();

    appBox.classList.add("minimized");
    miniIcon.classList.add("show");

    if (typeof stopSparkles === "function") stopSparkles();

    // TẮT NHẠC NỀN OTD CỦA BẠN
    if (bgMusic && !bgMusic.paused) {
        bgMusic.pause();
    }

    // BẬT ÂM THANH CỦA VIDEO NỀN YOUTUBE
    try {
        if (player && typeof player.unMute === "function") {
            player.unMute();
            player.setVolume(100);
        }
    } catch (err) {
        console.log("YouTube chưa load xong nhưng app vẫn ẩn bình thường:", err);
    }

    // KÍCH HOẠT PHÒNG LIVE STREAM BÌNH LUẬN CHẠY CHỮ
    onMiniConcertActive();
});

// 2. HÀM CHUNG ĐỂ BUNG/MỞ LẠI APP BÌNH THƯỜNG
function restoreAppGlow() {
    if (!appBox.classList.contains("minimized")) return;

    appBox.classList.remove("minimized");
    miniIcon.classList.remove("show");

    // Kích hoạt lại mưa sao theo điểm luck cũ
    const saved = JSON.parse(localStorage.getItem("dailyFortune"));
    if (saved && typeof startInfiniteSparkles === "function") {
        startInfiniteSparkles(parseInt(saved.luck) || 0);
    }

    // TẮT TIẾNG VIDEO NỀN YOUTUBE
    try {
        if (player && typeof player.mute === "function") {
            player.mute();
        }
    } catch (err) { console.log(err); }

    // BẬT LẠI NHẠC NỀN OTD CỦA BẠN
    if (musicBtn && musicBtn.classList.contains("active") && bgMusic) {
        bgMusic.play().catch(err => console.log("Chờ tương tác âm thanh"));
    }

    // DỌN DẸP SẠCH PHÒNG LIVE CHAT KHI THOÁT CONCERT
    onMiniConcertDeactive();
}

// 3. SỰ KIỆN CLICK KHÔI PHỤC APP
miniIcon.addEventListener("click", (e) => {
    e.stopPropagation();
     // 🚨 ÉP ẨN GIAO DIỆN CHAT NGAY TẠI ĐÂY KHI BẤM VÀO LỒNG ĐÈN
    const chatBtn = document.getElementById("toggleChatPanelBtn");
    const chatPanel = document.getElementById("liveChatPanel");
    if (chatBtn) chatBtn.classList.remove("show-btn");
    if (chatPanel) chatPanel.style.display = "none";
    restoreAppGlow();
});

            // 🔥 BẢN SỬA LỖI CHÍ MẠNG TOÀN DIỆN (ĐỒNG BỘ THEO CƠ CHẾ CLASS CỦA LIGHTSTICK)
window.addEventListener("click", (e) => {
    const chatPanel = document.getElementById("liveChatPanel");
    const overlayBox = document.getElementById("commentOverlay");
    const chatBtn = document.getElementById("toggleChatPanelBtn");

    // Sử dụng .closest hoặc .contains để kiểm tra chính xác vị trí click
    const clickInChat = chatPanel && chatPanel.contains(e.target);
    const clickInOverlay = overlayBox && overlayBox.contains(e.target);
    const clickInChatBtn = chatBtn && chatBtn.contains(e.target);

    // 1. NẾU CLICK VÀO ICON CHAT: Xử lý ẩn/hiện khung gõ bình luận
    if (clickInChatBtn) {
        e.stopPropagation(); // Chặn đứng không cho thoát concert ngoài ý muốn
        if (chatPanel) {
            chatPanel.style.display = (chatPanel.style.display === "none") ? "block" : "none";
            console.log("🔘 Chuyển đổi trạng thái khung chat.");
        }
        return; // Dừng tại đây, không chạy xuống logic thoát ở dưới
    }

    // 2. NẾU CLICK RA NGOÀI KHOẢNG TRỐNG: Tiến hành đóng phòng concert
    if (!clickInChat && !clickInOverlay) {
        console.log("🎬 Kích hoạt click ngoài: Ép ẩn giao diện chat ngay lập tức!");

        // 🚨 ĐOẠN ĐỒNG BỘ ÉP ẨN TRƯỚC: Xóa class để icon biến mất bất chấp hàm restoreAppGlow có bị 'return' hay không
        if (chatBtn) chatBtn.classList.remove("show-btn");
        if (chatPanel) chatPanel.style.display = "none";
        if (overlayBox) overlayBox.innerHTML = "";

        // Sau khi đã dọn dẹp xong giao diện chat, tiến hành gọi hàm mở lại app cũ của ông
        restoreAppGlow();
    }
});





    // 🔥 ĐOẠN GHÉP MỚI: LẮNG NGHE PHÍM ENTER ĐỂ GỬI BÌNH LUẬN AN TOÀN
const chatInput = document.getElementById("chatContentInput");
if (chatInput) {
    chatInput.addEventListener("keydown", (event) => {
        const sendBtn = document.getElementById("sendCommentBtn");
        if (event.key === "Enter" && sendBtn && !sendBtn.disabled) {
            event.preventDefault();
            sendBtn.click();
        }
    });
}


    // 4. THUẬT TOÁN KÉO LÊ DI CHUYỂN ICON PNG TỰ DO THEO TAY (DRAG & DROP)
    let isDragging = false;
    let hasMoved = false;
    let offsetX = 0, offsetY = 0;

    function dragStart(clientX, clientY) {
        if (!miniIcon.classList.contains("show")) return;
        isDragging = true;
        hasMoved = false;
        offsetX = clientX - miniIcon.getBoundingClientRect().left;
        offsetY = clientY - miniIcon.getBoundingClientRect().top;
    }

    function dragMove(clientX, clientY) {
        if (!isDragging) return;
        hasMoved = true;
        let left = clientX - offsetX;
        let top = clientY - offsetY;
        left = Math.max(10, Math.min(window.innerWidth - 85, left));
        top = Math.max(10, Math.min(window.innerHeight - 85, top));
        miniIcon.style.left = `${left}px`;
        miniIcon.style.top = `${top}px`;
        miniIcon.style.bottom = 'auto';
        miniIcon.style.right = 'auto';
    }

    function dragEnd() { isDragging = false; }

    miniIcon.addEventListener("mousedown", (e) => dragStart(e.clientX, e.clientY));
    window.addEventListener("mousemove", (e) => dragMove(e.clientX, e.clientY));
    window.addEventListener("mouseup", dragEnd);

    miniIcon.addEventListener("touchstart", (e) => {
        if (e.touches && e.touches.length > 0) dragStart(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });
    window.addEventListener("touchmove", (e) => {
        if (isDragging && e.touches && e.touches.length > 0) dragMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });
    window.addEventListener("touchend", dragEnd);
}


// =================================================================
// ⚙️ CÁC HÀM PHỤ TRỢ ĐỒNG BỘ ĐÃ ĐƯỢC CHUẨN HÓA THEO CODE CỦA BẠN
// =================================================================

function onMiniConcertActive() {
    // 1. 🔥 DÙNG CLASS: Thêm class để hiện icon chat đồng bộ với lightstick
    const chatBtn = document.getElementById("toggleChatPanelBtn");
    if (chatBtn) chatBtn.classList.add("show-btn"); 
    
    // Khung chat chính mặc định ẩn đi lúc đầu
const chatPanel = document.getElementById("liveChatPanel");
if (chatPanel) chatPanel.style.display = "none";

// 2. Logic kiểm tra nút Hide cmt của ông
const toggleCheckbox = document.getElementById("toggleCommentsCheckbox");
const commentOverlay = document.getElementById("commentOverlay");
if (toggleCheckbox && commentOverlay) {
    if (toggleCheckbox.checked) {
        commentOverlay.classList.add("hide-all-comments");
    } else {
        commentOverlay.classList.remove("hide-all-comments");
    }
}

if (typeof fetchCommentsForCurrentVideo === "function") fetchCommentsForCurrentVideo();
if (typeof startCommentSync === "function") startCommentSync();
if (typeof startRealtimeCommentPolling === "function") startRealtimeCommentPolling();
}


function onMiniConcertDeactive() {
    // 1. 🔥 DÙNG CLASS: Xóa class để ẩn icon chat đi ngay lập tức
    const chatBtn = document.getElementById("toggleChatPanelBtn");
    if (chatBtn) chatBtn.classList.remove("show-btn"); 
    
    // Ẩn luôn khung gõ chữ và dọn dẹp overlay
const chatPanel = document.getElementById("liveChatPanel");
const overlay = document.getElementById("commentOverlay");
if (chatPanel) chatPanel.style.display = "none";
if (overlay) {
    overlay.innerHTML = "";
    overlay.classList.remove("hide-all-comments");
}

// 2. Các lệnh xóa bộ nhớ đệm cũ của ông giữ nguyên
if (typeof syncTimer !== "undefined" && syncTimer) clearInterval(syncTimer);
if (typeof realtimeCommentInterval !== "undefined" && realtimeCommentInterval) clearInterval(realtimeCommentInterval);
if (typeof currentLoadedComments !== "undefined") currentLoadedComments = [];
if (typeof renderedCommentIds !== "undefined" && renderedCommentIds) renderedCommentIds.clear();

console.log("🧹 Đã ẩn Icon Chat theo cơ chế Class đồng bộ thành công!");
}





// =================================================================
// ĐOẠN XỬ LÝ SỰ KIỆN CLICK CHỐNG XUNG ĐỘT (Vứt vào cuối file JS của bạn)
// =================================================================
document.addEventListener("DOMContentLoaded", () => {
const chatBtn = document.getElementById("toggleChatPanelBtn");
const chatPanel = document.getElementById("liveChatPanel");
const toggleCheckbox = document.getElementById("toggleCommentsCheckbox");
const commentOverlay = document.getElementById("commentOverlay");

// 1. Click Icon PNG mở panel chat (Chống xung đột)
if (chatBtn && chatPanel) {
    chatBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        chatPanel.style.display = (chatPanel.style.display === "none") ? "block" : "none";
    });
}

// 2. Click vào khung chat chống thoát concert
if (chatPanel) {
    chatPanel.addEventListener("click", (event) => {
        event.stopPropagation();
    });
}

   // 3. LOGIC SỬA LỖI: Đảm bảo bỏ chọn là hiện lại ngay lập tức
if (toggleCheckbox && commentOverlay) {
    toggleCheckbox.addEventListener("change", function() {
        if (this.checked) {
            // Nếu TICK vào -> Thêm class ẩn
            commentOverlay.classList.add("hide-all-comments");
            commentOverlay.style.setProperty('display', 'none', 'important');
            console.log("🙈 Đã ẩn bình luận.");
        } else {
            // Nếu BỎ TICK -> Xóa sạch các dấu vết ẩn để hiện lại hoàn toàn
            commentOverlay.classList.remove("hide-all-comments");
            commentOverlay.style.setProperty('display', 'block', 'important');
            console.log("👁️ Đã hiện lại bình luận.");
        }
    });
}

});


// ======================================
// ONLINE LEADERBOARD
// ======================================

async function loadLeaderboard(){

const listContainer =
document.getElementById(
    "leaderboardList"
);

if(!listContainer) return;

const { data, error } =
await db
.from("leaderboard")
.select("*")
.eq(
    "date",
    getToday()
);

if(error){

    console.error(error);

    return;

}

if(!data.length){

    listContainer.innerHTML =
    `
    <div class="no-rank-yet">
        No ranks recorded today 💙
    </div>
    `;

    return;

}

data.sort((a,b)=>{

    if(
        b.luck !== a.luck
    ){

        return b.luck - a.luck;

    }

    return a.timestamp - b.timestamp;

});

const top10 =
data.slice(0,10);

listContainer.innerHTML =
top10.map(
(player,index)=>{

    const rank =
    index + 1;

    const medal =
    rank === 1
    ? "🥇"
    : rank === 2
    ? "🥈"
    : rank === 3
    ? "🥉"
    : "#" + rank;

    const fireClass =
    rank <= 3
    ? `rank-fire top-${rank}-fire`
    : "";

    return `

    <div class="rank-item ${fireClass}">
        <div class="rank-left">
            <span class="rank-number">
                ${medal}
            </span>
            <span class="rank-name">
                ${player.name}
            </span>
            <span class="rank-streak">
                🔥 ${player.streak}
            </span>
        </div>

        <div class="rank-right">

            <span class="rank-luck">
                ✨ ${player.luck}%
            </span>
            <span class="rank-time">
                ${player.time}
            </span>
        </div>
    </div>
    `;
})
.join("");

}

// load lần đầu
loadLeaderboard();

// realtime
db
.channel(
    "leaderboard-live"
)
.on(
    "postgres_changes",
    {
        event:"*",
        schema:"public",
        table:"leaderboard"
    },
    () => {

        loadLeaderboard();

    }
)
.subscribe();

loadLeaderboard();



// =================================================================
// 💬 HỆ THỐNG PHÒNG LIVE STREAM / MINI CONCERT (BẢN VÁ SỬA LỖI CÚ PHÁP)
// =================================================================

// Tự động kiểm tra và khởi tạo bộ nhớ đệm an toàn chống lỗi
if (typeof currentLoadedComments === "undefined" || !currentLoadedComments) {
    var currentLoadedComments = [];     
}
if (typeof renderedCommentIds === "undefined" || !renderedCommentIds || typeof renderedCommentIds.clear !== "function") {
    var renderedCommentIds = new Set(); 
}
if (typeof syncTimer === "undefined") {
    var syncTimer = null;               
}
if (typeof realtimeCommentInterval === "undefined") {
    var realtimeCommentInterval = null;
}

// 1. Hàm lấy mốc thời gian hiện tại của trình phát YouTube
function getVideoCurrentTime() {
    return (player && typeof player.getCurrentTime === "function") ? player.getCurrentTime() : 0;
}

// 2. Tải toàn bộ bình luận của bài hát hiện tại từ Supabase
async function fetchCommentsForCurrentVideo() {
    const currentVideoId = shuffledList[currentIndex];
    if (!currentVideoId) return;

    currentLoadedComments = [];
    if (renderedCommentIds && typeof renderedCommentIds.clear === "function") {
        renderedCommentIds.clear();
    } else {
        renderedCommentIds = new Set();
    }

    const overlay = document.getElementById("commentOverlay");
    if (overlay) overlay.innerHTML = "";

    try {
        const { data, error } = await db
            .from('live_comments')
            .select('*')
            .eq('video_source', currentVideoId);

        if (error) throw error;
        currentLoadedComments = data || [];
        console.log(`📥 Kết nối phòng Live thành công! Đã tải ${currentLoadedComments.length} bình luận.`);
    } catch (err) {
        console.error("Lỗi khi tải bình luận từ Supabase:", err);
    }
}

// 3. Vòng lặp kiểm tra mốc giây thả bình luận chuẩn (Tiết kiệm RAM)
function startCommentSync() {
    if (syncTimer) clearInterval(syncTimer);
    
    syncTimer = setInterval(() => {
        if (!currentLoadedComments || currentLoadedComments.length === 0) return;

        const currentTime = getVideoCurrentTime();

        currentLoadedComments.forEach(comment => {
            if (Math.abs(comment.video_time_seconds - currentTime) < 0.5) {
                if (renderedCommentIds && typeof renderedCommentIds.has === "function" && !renderedCommentIds.has(comment.id)) {
                    renderedCommentIds.add(comment.id);
                    createBulletCommentElement(comment);
                }
            }
        });
    }, 400); 
}

// 4. 🔥 ĐÃ SỬA LỖI DÒNG 2077: Chuyển toàn bộ thành 'db.from' để sạch bóng lỗi Console
function startRealtimeCommentPolling() {
    if (realtimeCommentInterval) clearInterval(realtimeCommentInterval);
    
    realtimeCommentInterval = setInterval(async () => {
        const currentVideoId = shuffledList[currentIndex];
        if (!currentVideoId || document.getElementById("liveChatPanel").style.display !== "block") return;

        try {
            const { data, error } = await db
                .from('live_comments')
                .select('*')
                .eq('video_source', currentVideoId);

            if (!error && data) {
                const existingIds = new Set(currentLoadedComments.map(c => c.id));
                const newComments = data.filter(c => !existingIds.has(c.id));
                
                if (newComments.length > 0) {
                    currentLoadedComments.push(...newComments);
                    console.log(`📡 Đã tải thêm ${newComments.length} cmt mới thời gian thực!`);
                }
            }
        } catch (e) {
            console.error("Lỗi quét bình luận thời gian thực:", e);
        }
    }, 12000); 
}

// 5. Tạo hiệu ứng chữ bay đa sắc NGHỆ THUẬT (Bản Premium Glow - Siêu Đẹp)
// Khởi tạo biến toàn cục để theo dõi luồng bay (Đặt ở ngoài hàm, phía trên cùng file JS hoặc trên đầu hàm này)
if (typeof currentCommentRowIndex === "undefined") {
    var currentCommentRowIndex = 0; 
}

function createBulletCommentElement(comment) {
    const overlay = document.getElementById("commentOverlay");
    if (!overlay) return;
    if (!comment || !comment.content) return;

    const span = document.createElement("span");
    span.classList.add("bullet-comment");

    if (comment.nickname) {
        span.innerHTML = `<b style="color: #ffffff; opacity: 0.9;">${comment.nickname}:</b> ${comment.content}`;
    } else {
        span.innerHTML = comment.content;
    }

    // 🌟 BẢNG MÀU PREMIUM GLOW GIỮ NGUYÊN CỦA ÔNG
    const glowStyles = [
        { color: "#ff9ebe", shadow: "0 0 8px rgba(255, 158, 190, 0.6), 0 2px 4px rgba(0,0,0,0.5)" }, 
        { color: "#c3a5ff", shadow: "0 0 8px rgba(195, 165, 255, 0.6), 0 2px 4px rgba(0,0,0,0.5)" }, 
        { color: "#7ae7ff", shadow: "0 0 8px rgba(122, 231, 255, 0.6), 0 2px 4px rgba(0,0,0,0.5)" }, 
        { color: "#6effb0", shadow: "0 0 8px rgba(110, 255, 176, 0.6), 0 2px 4px rgba(0,0,0,0.5)" }, 
        { color: "#fef08a", shadow: "0 0 8px rgba(254, 240, 138, 0.6), 0 2px 4px rgba(0,0,0,0.5)" }, 
        { color: "#ffb37e", shadow: "0 0 8px rgba(255, 179, 126, 0.6), 0 2px 4px rgba(0,0,0,0.5)" }, 
        { color: "#a5f3fc", shadow: "0 0 8px rgba(165, 243, 252, 0.6), 0 2px 4px rgba(0,0,0,0.5)" }  
    ];

    const randomStyle = glowStyles[Math.floor(Math.random() * glowStyles.length)];
    span.style.color = randomStyle.color;
    span.style.textShadow = randomStyle.shadow;

    // =================================================================
    // 🚨 THUẬT TOÁN CHIA LUỒNG CHỐNG ĐÈ CHỮ (SỬA ĐOẠN RANDOM CŨ THÀNH ĐOẠN NÀY)
    // =================================================================
    // Định nghĩa 7 hàng dọc cố định cách nhau từ 8% đến 68% chiều cao màn hình để không chạm thanh điều khiển
    const tracks = [8, 18, 28, 38, 48, 58, 68]; 
    
    // Lấy luồng hiện tại dựa trên bộ đếm luân phiên
    const currentTrackTop = tracks[currentCommentRowIndex];
    
    // Cộng thêm một chút xê dịch ngẫu nhiên siêu nhỏ (-2% đến +2%) cho các dòng nhìn tự nhiên, không bị quá thẳng hàng cứng nhắc
    const microOffset = Math.floor(Math.random() * 5) - 2; 
    
    // Áp dụng tọa độ chiều dọc an toàn cho bình luận
    span.style.top = `${currentTrackTop + microOffset}%`;

    // Tăng chỉ số luồng lên cho bình luận tiếp theo (Nếu vượt quá số hàng thì tự động reset về hàng 0)
    currentCommentRowIndex = (currentCommentRowIndex + 1) % tracks.length;
    // =================================================================

    overlay.appendChild(span);
    setTimeout(() => span.remove(), 12000); 
}



// 6. Xử lý sự kiện gửi bình luận (Đồng bộ thuần theo saved_nickname)
document.getElementById("sendCommentBtn").addEventListener("click", async () => {
    const inputField = document.getElementById("chatContentInput");
    const isAnonymous = document.getElementById("anonymousCheckbox").checked;
    const content = inputField.value.trim();

    if (!content) return;

    let nickname = null;

    // Sử dụng biến saved_nickname định danh theo ý của ông
    if (!isAnonymous) {
        const nicknameInput = document.getElementById("nicknameInput");
        
        // Bước 1: Ưu tiên lấy chữ đang hiển thị ở ô nhập trên màn hình
        let currentName = nicknameInput ? nicknameInput.value.trim() : "";
        
        // Bước 2: Nếu ô nhập trống, chủ động lôi vèo dữ liệu đã lưu trong localStorage ra dùng
        if (!currentName) {
            currentName = localStorage.getItem("saved_nickname") || "";
        }
        
        // Bước 3: Nếu cả 2 nơi đều trống hoàn toàn thì mới gán tên mặc định
        nickname = currentName !== "" ? currentName : "Người xem";
    }

    const currentVideoId = shuffledList[currentIndex];
    const videoTime = getVideoCurrentTime();

    try {
        // Đẩy dữ liệu lên bảng live_comments thông qua cổng kết nối 'db' của ông
        const { data, error } = await db
            .from('live_comments')
            .insert([
                { 
                    video_source: currentVideoId, 
                    nickname: nickname, // Gửi chính xác cái tên saved_nickname lên phòng live
                    content: content, 
                    video_time_seconds: videoTime 
                }
            ]).select();

        if (error) throw error;

        // Trích xuất mảng data chuẩn xác bằng dấu ngoặc vuông để bắn chữ lập tức
        if (data && data.length > 0) {
            const newInsertedComment = data[0]; 

            currentLoadedComments.push(newInsertedComment);
            renderedCommentIds.add(newInsertedComment.id);

            // Chữ của chính mình phóng vèo ra màn hình ngay trong 0.01 giây
            createBulletCommentElement(newInsertedComment);
        }

        inputField.value = "";
        startCooldown();

    } catch (err) {
        console.error("Lỗi khi gửi dữ liệu lên Supabase:", err);
        alert("Gửi bình luận thất bại. Hãy chắc chắn ông đã tạo bảng 'live_comments' và tắt RLS trên Supabase Dashboard!");
    }
});


//=================
function startCooldown() {
    const btn = document.getElementById("sendCommentBtn");
    const timerText = document.getElementById("cooldownTimer");
    let count = 10;

    btn.disabled = true;
    timerText.textContent = `CD: ${count}s`;

    const cdInterval = setInterval(() => {
        count--;
        if (count <= 0) {
            clearInterval(cdInterval);
            btn.disabled = false;
            timerText.textContent = "";
        } else {
            timerText.textContent = `Chờ CD: ${count}s`;
        }
    }, 1000);
}


//=============
//Đếm ngược
//=====================
function startCooldown() {
    const btn = document.getElementById("sendCommentBtn");
    const timerText = document.getElementById("cooldownTimer");
    let count = 10;

    btn.disabled = true;
    timerText.textContent = `CD: ${count}s`;

    const cdInterval = setInterval(() => {
        count--;
        if (count <= 0) {
            clearInterval(cdInterval);
            btn.disabled = false;
            timerText.textContent = "";
        } else {
            timerText.textContent = `CD: ${count}s`;
        }
    }, 1000);
}




//========================
// cập nhật cmt real time
//======================
realtimeCommentInterval = null;

function startRealtimeCommentPolling() {
if (realtimeCommentInterval) clearInterval(realtimeCommentInterval);

// Cứ mỗi 12 giây sẽ tự tải thêm bình luận mới của phòng này từ Supabase
realtimeCommentInterval = setInterval(async () => {
    const currentVideoId = shuffledList[currentIndex];
    if (!currentVideoId || document.getElementById("liveChatPanel").style.display !== "block") return;

    try {
        const { data, error } = await db // mình thay cho supabase
            .from('live_comments')
            .select('*')
            .eq('video_source', currentVideoId);

        if (!error && data) {
            // Chỉ lấy những bình luận mới mà bộ nhớ tạm hiện tại chưa có
            const existingIds = new Set(currentLoadedComments.map(c => c.id));
            const newComments = data.filter(c => !existingIds.has(c.id));

            if (newComments.length > 0) {
                currentLoadedComments.push(...newComments);
                console.log(`📡 Phát hiện và tải thêm ${newComments.length} cmt mới từ người xem khác!`);
            }
        }
    } catch (e) {
        console.error("Lỗi quét bình luận thời gian thực:", e);
    }
}, 1000); // 12 giây là khoảng thời gian tối ưu để không bị quá tải băng thông Supabase miễn phí

}


//================
//Xóa cmt khi mở lại card
// ============
function onMiniConcertDeactive() {
    // 1. Ẩn khung nhập chat và xóa sạch chữ đang bay trên màn hình
    document.getElementById("liveChatPanel").style.display = "none";
    document.getElementById("commentOverlay").innerHTML = "";

    // 2. Xóa bỏ hoàn toàn các vòng lặp chạy ngầm để tiết kiệm RAM và CPU
    if (syncTimer) clearInterval(syncTimer);
    if (realtimeCommentInterval) clearInterval(realtimeCommentInterval);
    
    // 3. Làm sạch bộ nhớ đệm
    currentLoadedComments = [];
    renderedCommentIds.clear();
    
    console.log("🧹 Đã dọn dẹp sạch phòng live, tối ưu RAM thành công!");
}



//=================
//Ẩn bình luận
//================
// Thiết lập xử lý sự kiện Ẩn/Hiện bình luận khi trang đã tải xong
document.addEventListener("DOMContentLoaded", () => {
    const chatBtn = document.getElementById("toggleChatPanelBtn");
    const chatPanel = document.getElementById("liveChatPanel");
    const toggleCheckbox = document.getElementById("toggleCommentsCheckbox");
    const commentOverlay = document.getElementById("commentOverlay");

    // Click Icon PNG mở/ẩn panel chat
 //   if (chatBtn && chatPanel) {
 //       chatBtn.addEventListener("click", (event) => {
 //           event.stopPropagation(); // Chặn lan truyền để không bị đóng concert
//            chatPanel.style.display = (chatPanel.style.display === "none") ? "block" : "none";
//        });
//    }

    // Bật tắt class ẩn chữ dựa trên trạng thái tick ô Hide cmt
    if (toggleCheckbox && commentOverlay) {
        toggleCheckbox.addEventListener("change", function() {
            if (this.checked) {
                commentOverlay.classList.add("hide-all-comments");
                console.log("🙈 Đã ẩn chữ bình luận.");
            } else {
                commentOverlay.classList.remove("hide-all-comments");
                console.log("👁️ Đã hiện lại chữ bình luận.");
            }
        });
    }
});

// =================================================================
// ✨ HIỆU ỨNG NÉN RUNG & BẮN CHỮ NGHỆ THUẬT (POP-BURST PREMIUM)
// =================================================================
document.addEventListener("DOMContentLoaded", () => {
    const chatBtn = document.getElementById("toggleChatPanelBtn");
    if (!chatBtn) return;

    const popWords = [
        "TWS", "Love u 42!", "💬", "#!!$*", "&$@", 
        "Concert! ✨", "Live 🎵", "Heyy~", "TWS loves everyone💖", "Fighting!",
        "Shinyu!🦒", "Dohoon!🐺", "Youngjae!🐶" ,"Hanjin!🐰", "Jihoon!🪼", "Kyungmin!🐥",
        "Saranghae~", "See you!", "TWS", "Love U~", "TWS Is The Best!!", "Handsome🔆", "So Talented💖",
        "💖💖💖", "🦒🐺🐶🐰🪼🐥", "TWS family💌", "⚡⚡⚡⚡", "Make some noise🎆", "I love you💝",
        "BFF", "Plot twist" , "Hey! hey!", "Friend forever🎀", "🎉🎉"
    ];

    function startPopTextLoop() {
        // Chỉ chạy hiệu ứng khi nút chat đang hiện trên màn hình
        if (chatBtn.classList.contains("show-btn") || chatBtn.style.display === "flex") {
            
            // 1. Ép nút thực hiện chuỗi hoạt ảnh co rút + rung lắc dữ dội
            chatBtn.classList.add("pop-burst-active");

            // 2. Canh chuẩn mốc 900ms (Khi nút vừa rung xong và nở to bung xòe) để bắn chữ
            setTimeout(() => {
                createPopText();
            }, 900);

            // 3. Khi kết thúc toàn bộ animation (1200ms), gỡ bỏ class để nút hồi phục về trạng thái bồng bềnh bình thường
            setTimeout(() => {
                chatBtn.classList.remove("pop-burst-active");
            }, 1200);
        }
        
        // Khoảng cách giữa các lần "lên cơn rung và bắn chữ" ngẫu nhiên từ 5 đến 8 giây cho tự nhiên
        const nextLoopDelay = Math.floor(Math.random() * 3000) + 2000;
        setTimeout(startPopTextLoop, nextLoopDelay);
    }

    function createPopText() {
        const textEl = document.createElement("span");
        textEl.className = "chat-pop-text";
        textEl.innerText = popWords[Math.floor(Math.random() * popWords.length)];
        
        // Quỹ đạo bay lệch ngẫu nhiên góc rộng sang trái/phải (-40px đến 40px)
        const randomX = Math.floor(Math.random() * 80) - 10;
        textEl.style.setProperty('--pop-x', `${randomX}px`);
        
        // Đặt điểm xuất phát ngay chính tâm vòng tròn nút bấm
        textEl.style.left = "50%";
        textEl.style.top = "50%";
        textEl.style.transform = "translate(-50%, -50%)";

        chatBtn.appendChild(textEl);

        // Xóa thẻ chữ sau khi bay xong 1 giây
        setTimeout(() => {
            textEl.remove();
        }, 2000);
    }

    // Kích hoạt guồng quay hiệu ứng
    startPopTextLoop();
});
