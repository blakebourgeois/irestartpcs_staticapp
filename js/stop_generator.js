function callStop(){
    var STOP_CODES = ["MIMIKATZ_DETECTED","SYSTEM32_NOT_FOUND","CURSED_BY_WIZARD","5G_OVERLOADED","RANSOMWARE_KERNEL_OVERWRITE","DRIVER_GAVE_UP","SYSWOW666","CLOUD_FULL","IRQL_SUPER_UNHAPPY","OUT_TO_LUNCH","TASK_MANAGER_NOT_RESPONDING","CRYPTOMINER_PREVENTION","ASR_RULE_TRIGGER","BITLOCKER_BIT_EXHAUSTION","TOOK_A_DUMP","POWERSHELL_POWERS_HELL","KERNEL_PANIC","WSL_HOSTILE_TAKEOVER","YEAR_OF_LINUX_ON_DESKTOP","BACKWARDS_COMPATIBILITY_NOT_ASSURED","AZURE_NOT_FOUND","WINDOWS_GENIUNE_ADVANTAGE_CHECK_FAILED","MFA_TOKEN_EXPIRY","CLIPPY_SAYS_HI","OPERATOR_UNDER_BALLMER_PEAK","OPERATOR_OVER_BALLMER_PEAK","PROTESTING_DUE_TO_LACK_OF_UPDATES","LOL","0x0B00B1E5","THIS_IS_FINE","WATCHDOG_FELL_ASLEEP","HEXED_BY_WITCH","ABANDONED_BY_GOD","STACKOVERFLOW_COPY_FAILED","DOG_ATE_MY_HOMEWORK","DNS","ITS_ALWAYS_DNS","REGISTRY_WENT_WHOOPS","NTFS_CONVERTED_TO_NFT","IM_12_AND_WHAT_IS_THIS","IM_A_PC","TASK_FAILED_SUCCESSFULLY","INTERNET_EXPLORED","STOP_KILLING_SVCHOST","TELEMETRY_PAUSED","EICAR_FILE_SCAWY","MS17-010","METERPRETER_SESSION_CLOSED","PSEXECSVC_ILLEGAL_EXCEPTION"]
    var randomStop = STOP_CODES[Math.floor(Math.random()*STOP_CODES.length)]
    document.getElementById('stop').innerText = document.getElementById('stop').innerText.replace('OOPS',randomStop)
    }