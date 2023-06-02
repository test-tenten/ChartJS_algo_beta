const level = "https://file.notion.so/f/s/ee82b112-6c8c-4c40-a3e8-b4e50239b0da/level_method_module_chart_data.json?id=f8954ca4-87d6-40f6-876b-ffaa8b627220&table=block&spaceId=579fe283-28aa-489d-ae65-d683304becfc&expirationTimestamp=1685777215015&signature=NsT25_vXDUzxzs-E8A9NvDrlG9wWLKB2P31wBeojVcs&downloadName=level_method_module_chart_data.json";

        fetch(level)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                // 레벨별 문제수
                const levelCountData = [
                    data["py"]["level_problem_name"]["level0"],
                    data["py"]["level_problem_name"]["level1"],
                    data["py"]["level_problem_name"]["level2"],
                    data["py"]["level_problem_name"]["level3"]
                ];
                // console.log(levelCountData)


                // 레벨별 유형별 문제수
                const levelProblemTypeCountData = [
                    data["py"]["level_problem_type"]["level0"],
                    data["py"]["level_problem_type"]["level1"],
                    data["py"]["level_problem_type"]["level2"],
                    data["py"]["level_problem_type"]["level3"]
                ];

                // 레벨별 문제 유형 비율
                const levelProblemTypeData = [
                    data["py"]["level_problem_type_ratio"]["level0"],
                    data["py"]["level_problem_type_ratio"]["level1"],
                    data["py"]["level_problem_type_ratio"]["level2"],
                    data["py"]["level_problem_type_ratio"]["level3"]
                ];

                // // 메소드 모듈 빈도수
                let methodCountData = [];
                for (const key in data["py"]["function_method_sort"]) {
                    methodCountData.push(data["py"]["function_method_sort"][key])
                }
                console.log(methodCountData)

                // // 레벨별 모듈 메소드
                // const levelMethodCountData = [
                //     data["py"]
                //     data["py"]
                //     data["py"]
                //     data["py"]
                //     data["py"]
                //     data["py"]
                // ];


                // 출제 업체 수 차트
                var levelCountChart = new Chart(document.getElementById('level-count-chart'), {
                    type: 'pie',
                    data: {
                        labels: ["level0", "level1", "level2", "level3"],
                        datasets: [{
                            data: levelCountData,
                            backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)'],
                            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                            borderWidth: 1
                        }]
                    }
                });



                // 레벨별 문제수
                var levelProblemTypeCountChart = new Chart(document.getElementById('level-problem-type-count-chart'), {
                    type: 'doughnut',
                    data: {
                        labels: ["level0", "level1", "level2", "level3"],
                        datasets: [{
                            data: levelCountData,
                            backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 206, 86, 0.8)', 'rgba(75, 192, 192, 0.8)'],
                            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                            borderWidth: 1
                        }]
                    }
                });


                // 레벨별 문제 유형 비율
                var levelProblemTypeCountChart = new Chart(document.getElementById('levelProblemTypeData'), {
                    type: 'doughnut',
                    data: {
                        labels: ["level0", "level1", "level2", "level3"],
                        datasets: [{
                            data: levelProblemTypeData,
                            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'],
                            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                            borderWidth: 1
                        }]
                    }
                });


                // 레벨 별 메서드 카운트 차트
                var methodCountLvChart = new Chart(document.getElementById('method-count-chart'), {
                    type: 'bar',
                    data: {
                        labels: ["range", "len", ".append", "int", "str", "sorted", "sum", "ord", "max", ".join", "set", ".count", "list", ".pop", ".sort", ".index", ".popleft", ".lower", ".replace", ".split", "print", "min", "chr", ".upper", "map", "zip", ".isdigit", ".items", ".find", "abs", ".sub", ".strip", ".compile", "bin", ".islower", "input", ".remove", "enumerate", ".isupper", ".insert", ".get", ".reverse", ".findall", ".isqrt", ".gcd", ".fromkeys", "reversed", ".zfill", ".keys", "divmod", "dict", ".values", ".startswith", "math", "deque", "re", "combinations", "collections", "ceil", "itertools"],
                        datasets: [{
                            data: methodCountData,
                            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                            // borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });

            });