class Debug {
  static enabled = true;

  static log(message, data = null) {
    if (!this.enabled) return;
    
    console.log(`[DEBUG] ${message}`);
    if (data) {
      console.log(data);
    }
  }

  static error(message, error) {
    if (!this.enabled) return;
    
    console.error(`[ERROR] ${message}`);
    if (error) {
      console.error('Error details:', error);
      console.error('Stack trace:', error.stack);
    }
  }
}

export default Debug;
