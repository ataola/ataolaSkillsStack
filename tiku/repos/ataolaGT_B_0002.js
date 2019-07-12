const PI  = Math.PI;

/**
 * 
 * @param {number} degree 角度
 */
function degree_to_r(degree) {
    return (degree / 180) * PI
}

/**
 * 
 * @param {number} 弧度
 */
function r_to_degree(r) {
    return (r / PI) * 180
}

