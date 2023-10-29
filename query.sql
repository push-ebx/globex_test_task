SET STATISTICS TIME ON;

WITH cte AS (
  SELECT collaborators.id, 
	  collaborators.name, 
	  subdivisions.name AS sub_name,
	  subdivisions.id AS sub_id,
	  subdivisions.parent_id,
	  0 AS sub_level,  
	  COUNT(*) OVER (PARTITION BY subdivisions.id) AS colls_count,
	  collaborators.age 
  FROM collaborators
  INNER JOIN subdivisions ON collaborators.subdivision_id = subdivisions.id
  WHERE collaborators.id = 710253
  UNION ALL
  SELECT 
    collaborators.id,
    collaborators.name,
    subdivisions.name AS sub_name,
    subdivisions.id AS sub_id,
    subdivisions.parent_id,
    cte.sub_level + 1,
    COUNT(*) OVER (PARTITION BY subdivisions.id) AS colls_count,
    collaborators.age
  FROM cte
  INNER JOIN subdivisions ON cte.sub_id = subdivisions.parent_id
  INNER JOIN collaborators ON collaborators.subdivision_id = subdivisions.id
)
SELECT DISTINCT id, name, sub_name, sub_id, sub_level, colls_count FROM cte
WHERE age < 40 AND sub_id NOT IN (100055, 100059) AND LEN(name) > 11
ORDER BY sub_level ASC

-- Время работы SQL Server:
-- Время ЦП = 0 мс, затраченное время = 10 мс.

-- Время выполнения: 2023-10-29T21:52:16.5517190+03:00