// æ¸¸æˆçŠ¶æ€ç®¡ç†
class GameState {
    constructor() {
        this.currentNight = 1;
        this.maxNights = 1; // å½“å‰ç‰ˆæœ¬æœ€å¤§å…³å¡æ•°ï¼ˆæœªæ¥å¯æ‰©å±•åˆ°5ï¼‰
        this.currentTime = 0; // 0-6 (12AM-6AM)
        this.oxygen = 100; // æ°§æ°”æ›¿ä»£ç”µé‡
        this.isGameRunning = false;
        this.tutorialActive = false; // æ•™ç¨‹æ˜¯å¦æ¿€æ´»
        this.currentScene = 'office';
        this.cameraOpen = false;
        this.ventsClosed = false; // é€šé£Žå£çŠ¶æ€
        this.currentCam = 'cam11'; // å½“å‰æ‘„åƒå¤´
        this.cameraFailed = false; // æ‘„åƒå¤´æ˜¯å¦æ•…éšœ
        this.cameraRestarting = false; // æ‘„åƒå¤´æ˜¯å¦æ­£åœ¨é‡å¯
    }

    reset() {
        this.currentTime = 0;
        this.oxygen = 100;
        this.isGameRunning = true;
        this.tutorialActive = false;
        this.currentScene = 'office';
        this.cameraOpen = false;
        this.ventsClosed = false;
        this.currentCam = 'cam11';
        this.cameraFailed = false;
        this.cameraRestarting = false;
    }
}
