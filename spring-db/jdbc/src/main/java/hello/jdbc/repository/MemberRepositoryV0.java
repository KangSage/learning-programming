package hello.jdbc.repository;

import hello.jdbc.connection.DBConnectionUtil;
import hello.jdbc.domain.Member;
import lombok.extern.slf4j.Slf4j;

import java.sql.*;

/**
 * JDBC - DriverManager 사용
 */
@Slf4j
public class MemberRepositoryV0 {
  public Member save(Member member) throws SQLException {
    String sql = "INSERT INTO member (member_id, money) VALUES (?, ?)";
    Connection conn = null;
    PreparedStatement pstmt = null;
    try {
      conn = getConnection();
      pstmt = conn.prepareStatement(sql);
      pstmt.setString(1, member.getMemberId());
      pstmt.setInt(2, member.getMoney());
      pstmt.executeUpdate();
      return member;
    } catch (Exception e) {
      log.error("error={}", e.getMessage(), e);
      throw e;
    } finally {
      close(conn, pstmt, null);
    }
  }

  private void close(Connection conn, Statement stmt, ResultSet rs) {
    if (rs != null) {
      try {
        rs.close();
      } catch (SQLException e) {
        log.error("rs.close error={}", e.getMessage(), e);
      }
    }

    if (stmt != null) {
      try { stmt.close(); } catch (SQLException e) {
        log.error("stmt.close error={}", e.getMessage(), e);
      }
    }

    if (conn != null) {
      try {
        conn.close();
      } catch (SQLException e) {
        log.error("conn.close error={}", e.getMessage(), e);
      }
    }
  }

  private Connection getConnection() {
    return DBConnectionUtil.getConnection();
  }
}
