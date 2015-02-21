'use stritct';

module.exports = {
    /**
     * execute a set of cmd in a player
     * @param cmd
     * @param player
     */
    execute: function(cmd, player){
        var key;
        for(key in cmd){
            player[key] = cmd[key];
        }
    }
};
