WITH RecursiveCTE AS (
  SELECT c.id AS id, c.name AS name, c.subdivision_id AS sub_id, c.age AS age,
         s.name AS sub_name, s.parent_id AS parent_id, 1 AS sub_level
  FROM collaborators c
  INNER JOIN subdivisions s ON c.subdivision_id = s.id
  WHERE c.name = 'Сотрудник 1' -- Имя сотрудника Сотрудник 1

  UNION ALL

  SELECT c.id AS id, c.name AS name, c.subdivision_id AS sub_id, c.age AS age,
         s.name AS sub_name, s.parent_id AS parent_id, r.sub_level + 1 AS sub_level
  FROM collaborators c
  INNER JOIN subdivisions s ON c.subdivision_id = s.id
  INNER JOIN RecursiveCTE r ON s.parent_id = r.sub_id
)

SELECT r.id, r.name, r.sub_name, r.sub_id, r.sub_level, COUNT(*) AS colls_count
FROM RecursiveCTE r
WHERE r.age < 40 AND LEN(r.name) > 11
  AND r.sub_id NOT IN (100055, 100059)
GROUP BY r.id, r.name, r.sub_name, r.sub_id, r.sub_level
ORDER BY r.sub_level;
