/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {

    points.sort((a,b)=>{
        const A = Math.sqrt(a[0]**2+a[1]**2);
        const B = Math.sqrt(b[0]**2+b[1]**2);

        return A-B
    })

    return points.splice(0,k)
};