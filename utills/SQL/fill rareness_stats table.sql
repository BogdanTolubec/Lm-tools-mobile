UPDATE Rareness_Stats
SET common_stats_id = (id * 6) - 5,
 uncommon_stats_id = (id * 6) - 4,
 rare_stats_id = (id * 6) - 3,
 epic_stats_id = (6 * id) - 2,
 legendary_stats_id = (id * 6) - 1,
 mythic_stats_id = id * 6
WHERE (id = id)