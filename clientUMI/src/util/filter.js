export function filterdoMainNum(domain, data) {
    let offset = 999
    let num = []
    for (let i = 0; i < domain.length; i++) {
        if (domain[i].id < offset) {
            offset = domain[i].id
        }
    }

    data.map(item => {
        if (!num[item.domain - offset]) {
            num[item.domain - offset] = 0
        }
        num[item.domain - offset]++;
    })
    return domain.map(item => {
        return {
            id: item.id,
            name: item.name,
            num: num[item.id - offset]
        }
    })

}
export function filterTagNum(tags, data) {
    let offset = 999
    let num = []
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].id < offset) {
            offset = tags[i].id
        }
    }

    data.map(item => {
        if (!num[item.typeid - offset]) {
            num[item.typeid - offset] = 0
        }
        num[item.typeid - offset]++;
    })
    return tags.map(item => {
        return {
            id: item.id,
            name: item.name,
            num: num[item.id - offset]
        }
    })

}
export function filterUserByGrade(data) {
    let val = []
    val = data.map(item => {
        if (item.User.status !== 3) {
            return {
                grade: parseInt(item.id.substring(0, 4)),
                data: item
            }
        } else {
            return {
                grade: "指导老师",
                data: item
            }
        }

    })
    const attr = 'grade'
    val = val.sort((a, b) => {
        if (a[attr] < b[attr]) {
            return -1
        }
        if (a[attr] > b[attr]) {
            return 1
        }
        return 0
    })

    let temp = {};
    for (let i = 0; i < val.length; i++) {
        if (val[i] !== undefined) {
            if (!temp[val[i].grade]) {
                temp[val[i].grade] = []
            }
            temp[val[i].grade].push(val[i].data)
        }
    }
    return temp
}
export function filterGrade(data) {
    let val = []
    val = data.map(item => {
        if (item.User.status !== 3) {
            return {
                grade: parseInt(item.id.substring(0, 4)),
                data: item
            }
        } else {
            return {
                grade: "指导老师",
                data: item
            }
        }

    })
    const attr = 'grade'
    val = val.sort((a, b) => {
        if (a[attr] < b[attr]) {
            return -1
        }
        if (a[attr] > b[attr]) {
            return 1
        }
        return 0
    })

    let temp = {};
    for (let i = 0; i < val.length; i++) {
        if (val[i] !== undefined) {
            if (!temp[val[i].grade]) {
                temp[val[i].grade] = []
            }
            temp[val[i].grade].push(val[i].data)
        }
    }

    let grade = []
    for (let item in temp) {
        if (item === '指导老师') {
            grade.unshift(item)
        } else {
            grade.push(item)
        }

    }
    return grade
}