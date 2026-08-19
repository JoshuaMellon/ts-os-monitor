export interface MachineInfo {
    hostname: string;
    platform: string;
    arch: string;
    type: string;
    release: string;
    version: string;

    uptime: number;
    bootTime: number;

    userInfo: UserInfo;
}

export interface UserInfo {
    username: string;
    homedir: string;
    shell: string | null;
}
